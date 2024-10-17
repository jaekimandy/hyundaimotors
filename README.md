## Install

   ```
   python3 -m venv venv
   
   pip install -r requirements.txt    

## Migrations

   ```
   cd hyundai   
   python3 manage.py migrate      
   python3 manage.py makemigrations
   ```

## 서버 실행
   ```
   cd hyundai   
   python3 manage.py runserver   
  
   ```

## Worker 실행
   ```   
   cd hyundai
   python3 -m celery -A core worker  
   ```

## Worker Window 실행
   ``` 
   cd hyundai
   python3 -m celery -A core worker -P gevent   
   ```

## Front Build
   ``` 
   cd web
   yarn install
   yarn run generate   
   ```
