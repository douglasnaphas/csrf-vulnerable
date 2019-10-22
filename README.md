CSRF-Vulnerable, source for vulnemort.com
===========================================

This is the React frontend andExpress JS backend for vulnemort.com, a target
site for CSRF attacks, intended to test and better understand defenses and
bypasses for Cross-Site Request Forgery.

Run the backend from AWS Cloud9
-------------------------------

Be sure to run `npm install` on your Cloud9 instance.

    sed 's/NODE_ENV: production/NODE_ENV: development/' ./template.yml > ./dev-template.yml
    sam local start-api --template ./dev-template.yml --port 3002 --host <HOST_IP>
    
For AWS instances, use the private IP.

For example, with a Cloud9 EC2 instance with a private IP of 172.16.17.18:

    sed 's/NODE_ENV: production/NODE_ENV: development/' ./template.yml > ./dev-template.yml
    sam local start-api --template ./dev-template.yml --port 3002 --host 172.16.17.18