# TASK2 Assignment - Test Scenarios and Test Cases

The mobile app has the following new features:
* Login
* Registration
* Wallet creation

#### Feature: Login
Test Scenarios:
1. Positive Login Scenario:

Test Case: User enters valid credentials (username and password).
Acceptance Criteria: User should be logged into the app and directed to the home screen.

2. Invalid Login Scenario:

Test Case: User enters invalid credentials.
Acceptance Criteria: App should display an error message, and the user should not be able to log in.

3. Forgot Password Functionality:

Test Case: User clicks on "Forgot Password" and completes the password reset process.
Acceptance Criteria: User should receive a password reset email and be able to log in with the new password.

Priority Justification:
High Priority:

* Positive Login Scenario: Essential for users to access the app successfully.
* Invalid Login Scenario: Critical for security and preventing unauthorized access.

Medium Priority:

* Forgot Password Functionality: Important for user convenience and account recovery.



#### Feature: Registration
Test Scenarios:
1. Valid Registration:

Test Case: User provides all required information correctly during registration.
Acceptance Criteria: User should be registered successfully and directed to the app's onboarding or home screen.

2. Existing Email/Username Check:

Test Case: User tries to register with an email or username that already exists.
Acceptance Criteria: App should display an error message, prompting the user to choose a different email/username.

3. Password Strength Check:

Test Case: User attempts to register with a weak password.
Acceptance Criteria: App should enforce password strength requirements and prompt the user for a stronger password.

Priority Justification:
High Priority:

* Valid Registration: Critical for the onboarding process and user acquisition.
* Existing Email/Username Check: Important for preventing duplicate accounts and maintaining data integrity.

Medium Priority:

* Password Strength Check: Important for ensuring the security of user accounts.



#### Feature: Wallet Creation
Test Scenarios:
1. Create Wallet Successfully:

Test Case: User initiates the wallet creation process and provides the necessary information.
Acceptance Criteria: User should have a functional wallet associated with their account.

2. Existing Wallet Check:

Test Case: User tries to create a new wallet when one already exists.
Acceptance Criteria: App should inform the user that they already have a wallet and direct them to the wallet interface.

3. Insufficient Information for Wallet Creation:

Test Case: User provides incomplete information during wallet creation.
Acceptance Criteria: App should display an error message and prompt the user to provide the missing information.

Priority Justification:
High Priority:

* Create Wallet Successfully: Crucial for users to start using the app's financial features.
* Existing Wallet Check: Important to prevent users from accidentally creating multiple wallets.

Medium Priority:

* Insufficient Information for Wallet Creation: Important for guiding users to provide the necessary information.

Prioritizing the test scenarios and cases, should ensure that the most critical functionalities are thoroughly tested, providing a balance between security, usability, and functionality. The priority can be adjusted based on business requirements and potential risks.