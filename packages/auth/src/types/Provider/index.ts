import { AuthOptions } from '../Auth';
import { ConfirmSignUp } from './confirm-sign-up';
import { DeleteAccount } from './delete-account';
import { ResendSignUpCode } from './resend-sign-up-code';
import { SignUp } from './sign-up';
import { ChangePassword } from './change-password';
import { UpdateUserAttribute } from './update-user-attribute';
import { UpdatePreferredMfa } from './update-preferred-mfa';
import { VerifyUserAttribute } from './verify-user-attribute';
import { ConfirmVerifyUserAttribute } from './confirm-verify-user-attribute';
import { SignIn } from './sign-in';
import { SignInWithSocialToken } from './sign-in-with-social-token';
import { SignInWithSocialUI } from './sign-in-with-social-ui';
import { ConfirmSignIn } from './confirm-sign-in';
import { SetupTotp } from './setup-totp';
import { VerifyTotpToken } from './verify-totp-token';
import { ResetPassword } from './reset-password';
import { ConfirmResetPassword } from './confirm-reset-password';
import { GetUser } from './get-user';
import { RegisterDevice } from './register-device';
import { UnregisterDevice } from './unregister-device';
import {
	InitiateAuthCommandInput,
	InitiateAuthCommandOutput,
} from '@aws-sdk/client-cognito-identity-provider';

export interface AuthProvider {
	getModuleName(): 'Auth';
	getProviderName(): string;

	configure(config: AuthOptions): void;
	//
	signUp: SignUp;
	resendSignUpCode: ResendSignUpCode;
	confirmSignUp: ConfirmSignUp;
	deleteAccount: DeleteAccount;
	changePassword: ChangePassword;
	updateUserAttribute: UpdateUserAttribute;
	updatePreferredMFA: UpdatePreferredMfa;
	verifyUserAttribute: VerifyUserAttribute;
	confirmVerifyUserAttribute: ConfirmVerifyUserAttribute;
	signIn: SignIn;
	signInWithSocialToken: SignInWithSocialToken;
	signInWithSocialUI: SignInWithSocialUI;
	confirmSignIn: ConfirmSignIn;
	setupTotp: SetupTotp;
	verifyTotpToken: VerifyTotpToken;
	resetPassword: ResetPassword;
	confirmResetPassword: ConfirmResetPassword;
	getUser: GetUser;
	registerDevice: RegisterDevice;
	unregisterDevice: UnregisterDevice;
	initiateAuth(
		params: Omit<InitiateAuthCommandInput, 'ClientId'>
	): Promise<InitiateAuthCommandOutput>;
}

export * from './common';
export * from './confirm-sign-up';
export * from './delete-account';
export * from './resend-sign-up-code';
export * from './sign-up';
export * from './change-password';
export * from './update-user-attribute';
export * from './update-preferred-mfa';
export * from './verify-user-attribute';
export * from './confirm-verify-user-attribute';
export * from './sign-in';
export * from './sign-in-with-social-token';
export * from './sign-in-with-social-ui';
export * from './confirm-sign-in';
export * from './setup-totp';
export * from './verify-totp-token';
export * from './reset-password';
export * from './confirm-reset-password';
export * from './get-user';
export * from './register-device';
export * from './unregister-device';
