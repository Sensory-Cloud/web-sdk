import { SignJWT } from "jose/dist/browser/jwt/sign"
import bs58 from "bs58"
import { createPrivateKey, createPublicKey } from "crypto"

import { Config } from '../../src/config';
import { SecureCredentialStoreExample } from "./secure-credential-store.example";
import { OauthService } from "../../src/services/oauth.service";

// Tenant ID granted by Sensory Inc.
const sensoryTenantId: string = 'f6580f3b-dcaf-465b-867e-59fbbb0ab3fc';
// Globally Unique device ID generated by you to pin the web-sdk to a browser.
const uniqueDeviceId: string = '337ed9ac-4c0f-4cd2-9ecc-51f712e53e92';

const config: Config = {
  cloud: {
    host: 'https://your-inference-server.com',
  },
  device: {
    deviceId: uniqueDeviceId,
    defaultLanguageCode: 'en-US'
  },
  tenant: {
    tenantId: sensoryTenantId
  }
};

const credentialStore = new SecureCredentialStoreExample();
const oauthService = new OauthService(config, credentialStore);


const exampleRegister = async () => {
  // Generate cryptographically random credentials
  const oAuthClient = oauthService.generateCredentials();

  // Register credentials with Sensory Cloud
  const friendlyDeviceName = "Customer Chrome 1";

  // OAuth registration can take one of two paths, the insecure path that uses a shared secret between this device and your instance of Sensory Cloud
  // or asymmetric public / private keypair registration.

  // Path 1 --------
  // Insecure authorization credential as configured on your instance of Sensory Cloud
  const insecureSharedSecret = "password";
  await oauthService.register(friendlyDeviceName, insecureSharedSecret);

  // Path 2 --------
  // Secure Public / private keypair registration using Portable.BouncyCastle and ScottBrady.IdentityModel

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

  oauthService.register(friendlyDeviceName, token);
}