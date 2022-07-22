
#!/bin/bash
add_user()
{
	USER=$1
	PASS=$2

	useradd -m -p $USER $PASS && echo "Successfully add user"
}

#MAIN

adduser testing test@123