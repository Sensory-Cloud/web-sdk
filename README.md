# Sensory Cloud Web SDK

TODO ALL OF THIS


# Examples

## Creating a TokenManager


```typescript


```

## Creating an AudioService

AudioService blablabla

```typescript


```

### Obtaining Audio Models
TODO

### Enrolling with Audio

TODO

```typescript
// Create Listener
const audioEventListener = (evt: CustomEvent<AudioEvent>) => {
  const request = new CreateEnrollmentRequest();
  request.setAudiocontent(evt.detail.bytes);

  try {
    enrollmentStream.write(request);
  } catch (err) {
    console.error(err);
  }
}

// Start microphone
const audioEvent = await this.audioStreamInteractor.startCapturing(this.dataUploadInterval);
audioEvent.addListener(audioEventListener);

// Stop Microphone and de-register listener on stream end
enrollmentStream.on('end', (_) => {
  this.audioStreamInteractor.stopCapturing();
  audioEvent.removeListener(audioEventListener);
});
```

### Authenticating with Audio

```typescript
// Create Listener
const audioEventListener = (evt: CustomEvent<AudioEvent>) => {
  const request = new AuthenticateRequest();
  request.setAudiocontent(evt.detail.bytes);

  try {
    authenticationStream.write(request);
  } catch (err) {
    console.error(err);
  }
}

// Start microphone
const audioEvent = await this.audioStreamInteractor.startCapturing(this.dataUploadInterval);
audioEvent.addListener(audioEventListener);

// Stop Microphone and de-register listener on stream end
authenticationStream.on('end', (_) => {
  this.audioStreamInteractor.stopCapturing();
  audioEvent.removeListener(audioEventListener);
});
```

### Audio recognition

```typescript
// Create Listener
const audioEventListener = (evt: CustomEvent<AudioEvent>) => {
  const request = new ValidateEventRequest();
  request.setAudiocontent(evt.detail.bytes);

  try {
    eventStream.write(request);
  } catch (err) {
    console.error(err);
  }
}

// Start microphone
const audioEvent = await this.audioStreamInteractor.startCapturing(this.dataUploadInterval);
audioEvent.addListener(audioEventListener);

// Stop Microphone and de-register listener on stream end
eventStream.on('end', (_) => {
  this.audioStreamInteractor.stopCapturing();
  audioEvent.removeListener(audioEventListener);
});

```

### Transcription

```typescript
// Create Listener
const audioEventListener = (evt: CustomEvent<AudioEvent>) => {
  const request = new ValidateEventRequest();
  request.setAudiocontent(evt.detail.bytes);

  try {
    transcriptionStream.write(request);
  } catch (err) {
    console.error(err);
  }
}

// Start microphone
const audioEvent = await this.audioStreamInteractor.startCapturing(this.dataUploadInterval);
audioEvent.addListener(audioEventListener);

// Stop Microphone and de-register listener on stream end
transcriptionStream.on('end', (_) => {
  this.audioStreamInteractor.stopCapturing();
  audioEvent.removeListener(audioEventListener);
});
```


## Creating a VideoService

VideoService blablabla

### Obtaining Video Models

### Enrolling with Video

### Authenticating with Video

### Video recognition

## Creating a ManagementService

ManagementService bla bla
