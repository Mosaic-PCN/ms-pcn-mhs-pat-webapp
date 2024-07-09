import boto3
from botocore.exceptions import ClientError

# AWS Cognito credentials
USER_POOL_ID = "ca-central-1_Jbt1iqTwU"
CLIENT_ID = "4iu0n2pfsl25b7iob0shtgcdou"
USERNAME = 'amin.mohammadbagheri@gmail.com'
PASSWORD = 'yag3ghv*hvm6ewn@CYK'

def get_cognito_token(user_pool_id, client_id, username, password):
    client = boto3.client('cognito-idp', region_name='ca-central-1')

    try:
        # Authenticate the user
        response = client.initiate_auth(
            AuthFlow='USER_PASSWORD_AUTH',
            AuthParameters={
                'USERNAME': username,
                'PASSWORD': password,
            },
            ClientId=client_id
        )

        # Extract the ID token from the response
        id_token = response['AuthenticationResult']['IdToken']
        return id_token

    except ClientError as e:
        print(f"Error authenticating the user: {e}")
        return None

if __name__ == '__main__':
    token = get_cognito_token(USER_POOL_ID, CLIENT_ID, USERNAME, PASSWORD)
    if token:
        print(f"ID Token: {token}")
    else:
        print("Failed to retrieve ID token.")






        # eyJraWQiOiI2cVZiTllaWGZpNGV6RGZ2ZVZcL0puZWhhbVpxTGlEMFdieWxNNlVYSndnZz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlYzJkNTU4OC1kMDExLTcwY2MtOTQ5YS1jYjBmM2U3YTkwMDEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmNhLWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9jYS1jZW50cmFsLTFfSmJ0MWlxVHdVIiwiY29nbml0bzp1c2VybmFtZSI6ImVjMmQ1NTg4LWQwMTEtNzBjYy05NDlhLWNiMGYzZTdhOTAwMSIsIm9yaWdpbl9qdGkiOiI2NWE4MzA3ZC0zZWNmLTRhY2ItYTZlOC0yMzA3M2E5NjZmZDciLCJhdWQiOiI0aXUwbjJwZnNsMjViN2lvYjBzaHRnY2RvdSIsImV2ZW50X2lkIjoiMTY1ZjM2YjMtM2NmNC00OThiLWI2YTAtODUzNmE1YjI4NWJlIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MjA0OTU4NzcsImV4cCI6MTcyMDQ5OTQ3NywiaWF0IjoxNzIwNDk1ODc3LCJqdGkiOiJlMTg2YmM3Yi1hYjlhLTQ0MmYtODdhZS03YmQ1MGQwYmZjYmYiLCJlbWFpbCI6ImFtaW4ubW9oYW1tYWRiYWdoZXJpQGdtYWlsLmNvbSJ9.JsPuadulbr03ca1BbvXFEQ1huZ0IB3g5uX-uf9A9Ia84-4WQ3sCMlM2fvSf6Ka771RR6DTGmHDH87lLU7nP1yPvs8J9Op8XUvumDUaY6elddihlAMTo0h7es7b5yr4Vku0oPePhGscpb6fC9SS50dSvn5FqcWaw4nbU0BmVf3PmBKjyV-u_o13UUlBPJ2AAMLtFLX36s0rxaJbGUxFj9v9xAkOScTCOnP-uS7bAyoOVJi7FBUiT59SOWRmO1Qpm_TyyAVjn87Bjh7pgXxvy7H30m9CKP2p6gWQ-mgitqla3oVvM7DlWKwSbD67ht7FrwrAmLUu3aYwnaFXzVXUXSdg