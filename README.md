# Sensory Cloud Web SDK

Sensory Cloud Web SDK. Created to make communicating with Sensory Cloud easy on a web browser!

## General Information

Before getting started, you must spin up a Sensory Cloud inference server or have Sensory spin one up for you. When using the web SDK, you must also have your
inference sever configured in GRPC_WEB mode.

You must also have the following pieces of information:
* Your inference server URL
* Your Sensory Tenant ID (UUID)
* Your configured secret key used to register OAuth clients

## Dependencies

In order to compile sensory cloud for typescript, you must have the google-protobuf type definitions installed as development dependencies:
`npm i --save-dev @types/google-protobuf`

# Examples

## Checking Server Health

It's important to check the health of your Sensory Inference server. You can do so via the following:

```typescript
// Tenant ID granted by Sensory Inc.
const sensoryTenantId: string = 'f6580f3b-dcaf-465b-867e-59fbbb0ab3fc';
// Device enrollment credential configured in sensory cloud server
const credential: string = 'secure-password';
// Globally Unique device ID generated by you to pin the web-sdk to a browser.
const uniqueDeviceId: string = '337ed9ac-4c0f-4cd2-9ecc-51f712e53e92';

// Configuration specific to your tenant
const config: SDKInitConfig = {
  fullyQualifiedDomainName: 'your-inference-server.com',
  isSecure: true,
  tenantId: sensoryTenantId,
  enrollmentType: EnrollmentType.sharedSecret,
  credential: credential,
  deviceId: uniqueDeviceId,
  deviceName: 'example-device'
}

// Implement your own secure credential store
const credentialStore = new SecureCredentialStoreExample();
const oauthService = new OauthService(credentialStore);

// Initialize the SDk
await Initializer.initializeFromConfig(config, oauthService);

// Check server health
const healthService = new HealthService();
const serverHealth = await healthService.GetHealth();
```

## Secure Credential Store

ISecureCredential is an interface that store and serves your OAuth credentials (clientId and clientSecret).
ISecureCredential must be implemented by you and the credentials should be persisted in a secure manner, such as in an encrypted database.
OAuth credentials should be generated one time per unique browser.

For more information on how to securely store credentials in the web browser, please refer to the following [auth0 article](https://auth0.com/blog/secure-browser-storage-the-facts/). Ideally, these credentials are stored by a backend owned by you and severed to the browser when requested.

A crude example of ISecureCredential is as follows:

```typescript
// Example of how to crudely store credentials in local storage, which is NOT a secure location.
export class SecureCredentialStoreExample implements ISecureCredentialStore
{
  public saveCredentials(clientId: string, clientSecret: string) {
    localStorage.setItem('clientId', clientId);
    localStorage.setItem('clientSecret', clientSecret);
  }

  async getClientId(): Promise<string> {
    const clientId = localStorage.getItem('clientId')
    return clientId ?? '';
  }

  async getClientSecret(): Promise<string> {
    const clientSecret = localStorage.getItem('clientSecret')
    return clientSecret ?? '';
  }
}
```

## Registering OAuth Credentials

OAuth credentials should be registered once per unique browser. Registration is very simple, and provided as part of the SDK.

The below example shows how to create an OAuthService and register a client for the first time.

```typescript
// Tenant ID granted by Sensory Inc.
const sensoryTenantId: string = 'f6580f3b-dcaf-465b-867e-59fbbb0ab3fc';
// Globally Unique device ID generated by you to pin the web-sdk to a browser.
const uniqueDeviceId: string = '337ed9ac-4c0f-4cd2-9ecc-51f712e53e92';

const config: SDKInitConfig = {
  fullyQualifiedDomainName: 'your-inference-server.com',
  isSecure: true,
  tenantId: sensoryTenantId,
  enrollmentType: EnrollmentType.sharedSecret,
  credential: 'set-in-example',
  deviceId: uniqueDeviceId,
  deviceName: 'example-device'
}

const credentialStore = new SecureCredentialStoreExample();
const oauthService = new OauthService(credentialStore);

const exampleRegister = async () => {
  // Register credentials with Sensory Cloud

  // OAuth registration can take one of two paths, the insecure path that uses a shared secret between this device and your instance of Sensory Cloud
  // or asymmetric public / private keypair registration.

  // Path 1 --------
  // Insecure authorization credential as configured on your instance of Sensory Cloud
  config.credential = 'password';
  config.enrollmentType = EnrollmentType.sharedSecret;
  Initializer.initializeFromConfig(config, oauthService);;

  // Path 2 --------
  // Secure Public / private keypair registration using Portable.BouncyCastle and ScottBrady.IdentityModel
  // For this enrollment path, an implementation of IJWTSigner must be passed in during initialization
  config.credential = '7587B39CA91C81015BDDA3C81C65A24E470218E7B928222B92B301C83ABD66A3' // private key as a hex string
  config.enrollmentType = EnrollmentType.jwt;
  Initializer.initializeFromConfig(config, oauthService, new JWTSignerExample());

  // Keypair generation happens out of band and long before a registration occurs. The below example shows how to generate and sign an enrollment JWT as a comprehensive example.

  const publicBase58 = "A77GCUCZ7FAuXVMKtwwXyFhMa158XsaoGKHYNnJ1q3pv";
  const privateKeyBase58 = "BE1VM7rTRJReLsTLLG4JMNX5ozcp7qpmMuRht9zB1UjU";

  let publicKey = bs58.decode(publicBase58);
  let privateKey = bs58.decode(privateKeyBase58);

  publicKey = createPublicKey({
    key: {
      kty: "OKP",
      crv: "Ed25519",
      x: publicKey.toString("base64url")
    },
    format: "jwk"
  });

  privateKey = createPrivateKey({
    key: {
      kty: "OKP",
      crv: "Ed25519",
      x: publicKey.toString("base64url"),
      d: privateKey.toString("base64url"),
    },
    format: "jwk"
  })

  const token: string = await new SignJWT({
    subject: "uuid",
  })
    .setProtectedHeader({ alg: "EdDSA" })
    .setExpirationTime("2h")
    .sign(privateKey);
}
```

## Creating a TokenManager

The TokenManger class handles requesting OAuth tokens when necessary.

```typescript
// Implement your own secure credential store
const credentialStore = new SecureCredentialStoreExample();
const oauthService = new OauthService(credentialStore);
const tokenManager = new TokenManager(oauthService);

// Obtain OAuth token from Sensory Cloud
const token: string = tokenManager.GetToken();

return tokenManager;

```

## Creating an AudioService

AudioService provides methods to stream audio to Sensory Cloud. It is recommended to only have 1 instance of AudioService
instantiated per Config. In most circumstances you will only ever have one Config, unless your app communicates with
multiple Sensory Cloud servers.

```csharp
const getAudioService = (): AudioService => {
  // Implement your own secure credential store
  const credentialStore = new SecureCredentialStoreExample();
  const oauthService = new OauthService(credentialStore);
  const tokenManager = new TokenManager(oauthService);

  // Initialize the SDK
  const config = getConfig();
  await Initializer.initializeFromConfig(config, oauthService);

  // AudioStreamInteractor is a Sensory implementation that interacts with microphones through the web browser
  const audioStreamInteractor = new AudioStreamInteractor();

  return new AudioService(tokenManager, audioStreamInteractor);
}

```

### Obtaining Audio Models

Certain audio models are available to your application depending on the models that are configured for your instance of Sensory Cloud.
In order to determine which audio models are accessible to you, you can execute the below code.

```typescript
const exampleGetAudioModels = (): Promise<GetModelsResponse.AsObject> => {
  const audioService = getAudioService();
  return audioService.getModels();
}
```

Audio models contain the following properties:
* Name - the unique name tied to this model. Used when calling any other audio function.
* IsEnrollable - indicates if the model can be enrolled into. Models that are enrollable can be used in the CreateEnrollment function.
* ModelType - indicates the class of model and it's general function.
* FixedPhrase - for speech-based models only. Indicates if a specific phrase must be said.
* Samplerate - indicates the audio samplerate required by this model. Generally, the number will be 16000.
* IsLivenessSupported - indicates if this model supports liveness for enrollment and authentication. Liveness provides an added layer of security by requring a users to speak random digits.

### Enrolling with Audio

In order to enroll with audio, you must first ensure you have an enrollable model enabled for your Sensory Cloud instance. This can be obtained via the GetModels() request.
Enrolling with audio uses a bi-directional streaming pattern to allow immediate feedback to the user during enrollment. It is important to save the enrollmentId
in order to perform authentication against it in the future.

```typescript
const exampleEnrollWithAudio = async () => {
  // Set basic enrollment information
  const enrollmentDescription = "My Enrollment";
  const userId = "72f286b8-173f-436a-8869-6f7887789ee9";
  const modelName = "wakeword-16kHz-open_sesame.ubm";
  const isLivenessEnabled = false;
  const uploadInterval = 100; // Upload audio every 100ms

  // Begin gRPC enrollment stream
  const enrollmentStream = await audioService.streamEnrollment(
    enrollmentDescription,
    userId,
    modelName,
    isLivenessEnabled);

  // enrollmentId will be populated on the very last message if enrollment
  // is successful.
  let enrollmentId: string|null = null;

  // Handle responses from the server
  enrollmentStream.on('data', (response) => {
    // Response contains information about the enrollment status.
    // * audioEnergy
    // * percentComplete
    // For enrollments with liveness, there are two additional fields that are populated.
    // * modelPrompt - indicates what the user should say in order to proceed with the enrollment.
    // * sectionPercentComplete - indicates the percentage of the current ModelPrompt that has been spoken.
    enrollmentId = response.getEnrollmentid();
  });

  // Start microphone recording
  const audioEvent = await audioStreamInteractor.startCapturing(uploadInterval);

  // Register onData callback for the microphone audio
  const onData = (evt: CustomEvent<AudioEvent>) => {

    // Pack and send bytes to the server
    const request = new CreateEnrollmentRequest();
    request.setAudiocontent(evt.detail.bytes);

    try {
      enrollmentStream.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // Register callback
  audioEvent.addListener(onData);

  // Handle end of stream. This promise can be used to block until enrollment is complete.
  return new Promise<string>((resolve, reject) => {
    enrollmentStream.on('end', (status) => {
      audioEvent.removeListener(onData);
      audioStreamInteractor.stopCapturing();

      if (status?.code !== 0 || !enrollmentId?.length) {
        reject(`Enrollment failed due to reason: ${status?.details || 'enrollment was not complete'}`);
      } else {
        // Enrollment success!
        // Be sure to save enrollmentId for use later with authentication
        resolve(enrollmentId);
      }
    });
  });
}
```

### Authenticating with Audio

Authenticating with audio is similar to enrollment, except now you have an enrollmentId to pass into the function.

```typescript
const exampleAuthenticateWithAudio = async () => {
  // Get enrollmentId from the prior enrollment or from the getEnrollments call
  // offered by the ManagementService.
  const enrollmentId = "72f286b8-173f-436a-8869-6f7887789ee9";
  const isLivenessEnabled = false;
  const uploadInterval = 100; // Upload audio every 100ms

  // Begin gRPC authentication stream
  // For group authentication (groups of users up to 10) you can use
  // {enrollmentGroupId: enrollmentId} rather than {enrollmentId: enrollmentId}
  const authenticationStream = await audioService.streamAuthentication(
    {enrollmentId: enrollmentId}, isLivenessEnabled);

  // isAuthenticated will be true on the very last message if auth is successful.
  let isAuthenticated = false;

  // Handle responses from the server
  authenticationStream.on('data', (response) => {
    // Response contains information about the authentication audio such as:
    // * audioEnergy
    // For authentications with liveness, there are two additional fields that are populated.
    // * modelPrompt - indicates what the user should say in order to proceed with the authentication.
    // * sectionPercentComplete - indicates the percentage of the current ModelPrompt that has been spoken.
    isAuthenticated = response.getSuccess();
  });

  // Start microphone recording
  const audioEvent = await audioStreamInteractor.startCapturing(uploadInterval);

  // Register onData callback for the microphone audio
  const onData = (evt: CustomEvent<AudioEvent>) => {

    // Pack and send bytes to the server
    const request = new AuthenticateRequest();
    request.setAudiocontent(evt.detail.bytes);

    try {
      authenticationStream.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // Register callback
  audioEvent.addListener(onData);

  // Handle end of stream. This promise can be used to block until authentication is complete.
  return new Promise<boolean>((resolve, reject) => {
    authenticationStream.on('end', (status) => {
      audioEvent.removeListener(onData);
      audioStreamInteractor.stopCapturing();

      if (status?.code !== 0 || !isAuthenticated) {
        reject(`Authentication failed due to reason: ${status?.details || 'authentication was not successful'}`);
      } else {
        // Authentication success!
        resolve(isAuthenticated);
      }
    });
  });
}
```

### Audio events

Audio events are used to recognize specific words, phrases, or sounds.

```typescript
const exampleRecognizeWithAudio = async () => {
  const userId = "72f286b8-173f-436a-8869-6f7887789ee9";
  const modelName = "wakeword-16kHz-open_sesame.ubm";
  const uploadInterval = 100; // Upload audio every 100ms

  // Unlike enrollment and authentication, it is up to you, the implementer
  // to determine when to close the connection the server.
  const eventStream = await audioService.streamEvent(userId, modelName);

  // Handle responses from the server
  eventStream.on('data', (response) => {
    // Response contains information about the audio such as:
    // * audioEnergy

    // Event was recognized
    if (response.getSuccess()) {
      // Response will contain the following if the event was recognized
      // * resultId - indicating the name of the event that was recognized
      // * score - Sensory's confidence in the result

      // As an example, close the connection to the server after obtaining 1 event result.
      // You may also want a timeout to handle if the server never responds with a result.
      eventStream.end();
    }
  });

  // Start microphone recording
  const audioEvent = await audioStreamInteractor.startCapturing(uploadInterval);

  // Register onData callback for the microphone audio
  const onData = (evt: CustomEvent<AudioEvent>) => {

    // Pack and send bytes to the server
    const request = new ValidateEventRequest();
    request.setAudiocontent(evt.detail.bytes);

    try {
      eventStream.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // Register callback
  audioEvent.addListener(onData);

  // Handle end of stream. This promise can be used to block for as long as you'd like.
  // It's up to you, the SDk implementer to decide when to end this request.
  return new Promise<void>((resolve, reject) => {
    eventStream.on('end', (status) => {
      audioEvent.removeListener(onData);
      audioStreamInteractor.stopCapturing();

      if (status?.code !== 0 ) {
        reject(`Event recognition failed due to reason: ${status?.details || 'no response was returned'}`);
      } else {
        // Event success!
        resolve();
      }
    });
  });
}
```

### Transcription (Sliding Window Transcript)

Transcription is used to convert audio into text.

```typescript
const exampleTranscribeWithAudio = async () => {
  const userId = "72f286b8-173f-436a-8869-6f7887789ee9";
  const modelName = "speech_recognition_en";
  const uploadInterval = 100; // Upload audio every 100ms
  let transcript = '';

  // Unlike enrollment and authentication, it is up to you, the implementer
  // to determine when to close the connection the server.
  const transcribeStream = await audioService.streamTranscription(userId, modelName);

  // As an example, set a timeout for 10 seconds and then close the stream
  setTimeout(transcribeStream.end, 10000);

  // Handle responses from the server
  transcribeStream.on('data', (response) => {
    // Response contains information about the audio such as:
    // * audioEnergy

    // Transcript contains the current running transcript of the data on a 7-second sliding window
    // If you want to keep a list of the current transcript, see the below example
    const transcript = response.getTranscript();
  });

  // Start microphone recording
  const audioEvent = await audioStreamInteractor.startCapturing(uploadInterval);

  // Register onData callback for the microphone audio
  const onData = (evt: CustomEvent<AudioEvent>) => {

    // Pack and send bytes to the server
    const request = new ValidateEventRequest();
    request.setAudiocontent(evt.detail.bytes);

    try {
      transcribeStream.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // Register callback
  audioEvent.addListener(onData);

  // Handle end of stream. This promise can be used to block for as long as you'd like.
  // It's up to you, the SDk implementer to decide when to end this request.
  return new Promise<void>((resolve, reject) => {
    transcribeStream.on('end', (status) => {
      audioEvent.removeListener(onData);
      audioStreamInteractor.stopCapturing();

      if (status?.code !== 0 ) {
        reject(`Transcription failed due to reason: ${status?.details || 'no response was returned'}`);
      } else {
        // Transcription success!
        resolve();
      }
    });
  });
}
```

### Transcription (Full Transcript)

```typescript
const exampleTranscribeWithAudio = async () => {
  const userId = "72f286b8-173f-436a-8869-6f7887789ee9";
  const modelName = "speech_recognition_en";
  const uploadInterval = 100; // Upload audio every 100ms
  const aggregator = new FullTranscriptAggregator(); // FullTranscriptAggregator is provided by the audio service
  let transcript = '';

  // Unlike enrollment and authentication, it is up to you, the implementer
  // to determine when to close the connection the server.
  const transcribeStream = await audioService.streamTranscription(userId, modelName);

  // As an example, set a timeout for 10 seconds and then close the stream
  setTimeout(transcribeStream.end, 10000);

  // Handle responses from the server
  transcribeStream.on('data', (response) => {
    // Response contains information about the audio such as:
    // * audioEnergy

    // Transcript contains the current running transcript of the data on a 7-second sliding window
    // If you want to keep a list of the current transcript, see the below example
    aggregator.processResponse(response.getWordlist());
    transcript = aggregator.getCurrentTranscript();
  });

  // Start microphone recording
  const audioEvent = await audioStreamInteractor.startCapturing(uploadInterval);

  // Register onData callback for the microphone audio
  const onData = (evt: CustomEvent<AudioEvent>) => {

    // Pack and send bytes to the server
    const request = new ValidateEventRequest();
    request.setAudiocontent(evt.detail.bytes);

    try {
      transcribeStream.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // Register callback
  audioEvent.addListener(onData);

  // Handle end of stream. This promise can be used to block for as long as you'd like.
  // It's up to you, the SDK implementer to decide when to end this request.
  return new Promise<void>((resolve, reject) => {
    transcribeStream.on('end', (status) => {
      audioEvent.removeListener(onData);
      audioStreamInteractor.stopCapturing();

      if (status?.code !== 0 ) {
        reject(`Transcription failed due to reason: ${status?.details || 'no response was returned'}`);
      } else {
        // Transcription success!
        resolve();
      }
    });
  });
}
```

## Creating a VideoService

VideoService provides methods to stream images to Sensory Cloud. It is recommended to only have 1 instance of VideoService
instantiated per Config. In most circumstances you will only ever have one Config, unless your app communicates with
multiple Sensory Cloud servers.

```typescript
const getVideoService = (): VideoService => {
  // Implement your own secure credential store
  const credentialStore = new SecureCredentialStoreExample();
  const oauthService = new OauthService(credentialStore);
  const tokenManager = new TokenManager(oauthService);

  // Initialize the SDK
  const config = getConfig();
  await Initializer.initializeFromConfig(config, oauthService);

  // VideoStreamInteractor is a Sensory implementation that interacts with microphones through the web browser
  const videoStreamInteractor = new VideoStreamInteractor();

  return new VideoService(tokenManager, videoStreamInteractor);
}
```

### Obtaining Video Models

Certain video models are available to your application depending on the models that are configured for your instance of Sensory Cloud.
In order to determine which video models are accessible to you, you can execute the below code.

```typescript
const exampleGetVideoModels = (): Promise<GetModelsResponse.AsObject> => {
  const videoService = getVideoService();
  return videoService.getModels();
}
```

Audio models contain the following properties:
* Name - the unique name tied to this model. Used when calling any other video function.
* IsEnrollable - indicates if the model can be enrolled into. Models that are enrollable can be used in the CreateEnrollment function.
* ModelType - indicates the class of model and it's general function.
* FixedObject - for recognition-based models only. Indicates if this model is built to recognize a specific object.
* IsLivenessSupported - indicates if this model supports liveness for enrollment and authentication. Liveness provides an added layer of security.

### Enrolling with Video

In order to enroll with video, you must first ensure you have an enrollable model enabled for your Sensory Cloud instance. This can be obtained via the GetModels() request.
Enrolling with video uses a call and response streaming pattern to allow immediate feedback to the user during enrollment. It is important to save the enrollmentId
in order to perform authentication against it in the future.

```typescript
const exampleEnrollWithVideo = async () => {
  // Set basic enrollment information
  const enrollmentDescription = "My Enrollment";
  const userId = "72f286b8-173f-436a-8869-6f7887789ee9";
  const modelName = "face_biometric_hektor";
  const isLivenessEnabled = true;

  // Begin gRPC enrollment stream
  const enrollmentStream = await videoService.streamEnrollment(
    enrollmentDescription,
    userId,
    modelName,
    isLivenessEnabled);


  // Start camera recording
  const doCaptureFrame = await videoStreamInteractor.startCapturing();

  // Create callback to capture and send a frame up to Sensory Cloud
  const captureAndSendFrame = async () => {
    const frame = await doCaptureFrame();
    const request = new CreateEnrollmentRequest();
    request.setImagecontent(frame);

    try {
      enrollmentStream.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // enrollmentId will be populated on the very last message if enrollment is successful.
  let enrollmentId: string|null = null;

  // Handle responses from the server
  enrollmentStream.on('data', async (response) => {
    // Response contains information about the enrollment status.
    // * percentComplete

    // If enrollment is successful enrollmentId will be populated
    enrollmentId = response.getEnrollmentid();

    // If enrollment is not complete, send the next frame
    if (!enrollmentId) {
      await captureAndSendFrame();
    }
  });

  // Handle end of stream. This promise can be used to block until enrollment is complete.
  const streamEnd = new Promise<string>((resolve, reject) => {
    enrollmentStream.on('end', (status) => {
      videoStreamInteractor.stopCapturing();

      if (status?.code !== 0 || !enrollmentId?.length) {
        reject(`Enrollment failed due to reason: ${status?.details || 'enrollment was not complete'}`);
      } else {
        // Enrollment success!
        // Be sure to save enrollmentId for use later with authentication
        resolve(enrollmentId);
      }
    });
  });

  // Send first frame
  await captureAndSendFrame();

  return streamEnd;
}
```

### Authenticating with Video

Authenticating with video is similar to enrollment, except now you have an enrollmentId to pass into the function.

```typescript
const exampleAuthenticateWithVideo = async () => {
  // Set basic authentication information
  const enrollmentId = "72f286b8-173f-436a-8869-6f7887789ee9";
  const isLivenessEnabled = true;

  // Begin gRPC authentication stream
  const authenticationStream = await videoService.streamAuthentication(
    enrollmentId,
    isLivenessEnabled);

  // Start camera recording
  const doCaptureFrame = await videoStreamInteractor.startCapturing();

  // Create callback to capture and send a frame up to Sensory Cloud
  const captureAndSendFrame = async () => {
    const frame = await doCaptureFrame();
    const request = new AuthenticateRequest();
    request.setImagecontent(frame);

    try {
      authenticationStream.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // isAuthenticated will be true on the very last message if auth is successful.
  let isAuthenticated = false;

  // Handle responses from the server
  authenticationStream.on('data', async (response) => {
    // isAuthenticated will be true on the very last message if auth is successful.
    isAuthenticated = response.getSuccess();
  });

  // Handle end of stream. This promise can be used to block until authentication is complete.
  const streamEnd = new Promise<boolean>((resolve, reject) => {
    authenticationStream.on('end', (status) => {
      videoStreamInteractor.stopCapturing();

      if (status?.code !== 0 || !isAuthenticated) {
        reject(`Authentication failed due to reason: ${status?.details || 'authentication was not successful'}`);
      } else {
        // Authentication success!
        // Be sure to save authenticationId for use later with authentication
        resolve(isAuthenticated);
      }
    });
  });

  // Send first frame
  await captureAndSendFrame();

  return streamEnd;
}
```

### Video Liveness

Video Liveness allows one to send images to Sensory Cloud in order to determine if the subject is a live individual rather than a spoof, such as a paper mask or picture.

```typescript
const exampleValidateLivenessWithVideo = async () => {
  // Set basic authentication information
  const userId = "72f286b8-173f-436a-8869-6f7887789ee9";
  const modelName = "face_recognition_mathilde"

  // Unlike enrollment and authentication, it is up to you, the implementer
  // to determine when to close the connection the server.
  const livenessStream = await videoService.streamLivenessRecognition(userId, modelName);

  // As an example, set a timeout for 10 seconds and then close the stream
  setTimeout(livenessStream.end, 10000);

  // Start camera recording
  const doCaptureFrame = await videoStreamInteractor.startCapturing();

  // Create callback to capture and send a frame up to Sensory Cloud
  const captureAndSendFrame = async () => {
    const frame = await doCaptureFrame();
    const request = new ValidateRecognitionRequest();
    request.setImagecontent(frame);

    try {
      livenessStream.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // isAlive tracks if the prior frame was live
  let isAlive = false;

  // Handle responses from the server
  livenessStream.on('data', async (response) => {
    // isAlive will be true if the prior frame was determined to be live.
    isAlive = response.getIsalive();

    // As an implementor you could end the stream after a single liveness detection here
    // or after multiple liveness frames if you'd like
    // via livenessStream.end
    await captureAndSendFrame();
  });

  // Handle end of stream. This promise can be used to block until liveness is complete.
  const streamEnd =  new Promise<boolean>((resolve, reject) => {
    livenessStream.on('end', (status) => {
      videoStreamInteractor.stopCapturing();

      if (status?.code !== 0) {
        reject(`Liveness failed due to reason: ${status?.details || 'liveness was not successful'}`);
      } else {
        // Liveness done!
        resolve(isAlive);
      }
    });
  });

  // Send first frame
  await captureAndSendFrame();

  return streamEnd;
}
```

## Creating a ManagementService

The ManagementService is used to manage typical CRUD operations with Sensory Cloud, such as deleting enrollments or creating enrollment groups.
For more information on the specific functions of the ManagementService, please refer to the ManagementService file located in the Services folder.

```typescript
const getManagementService = (): ManagementService => {
  // Implement your own secure credential store
  const credentialStore = new SecureCredentialStoreExample();
  const oauthService = new OauthService(credentialStore);
  const tokenManager = new TokenManager(oauthService);

  // Initialize the SDK
  const config = getConfig();
  await Initializer.initializeFromConfig(config, oauthService);

  return new ManagementService(tokenManager);
}
```
