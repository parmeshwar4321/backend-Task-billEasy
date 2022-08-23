# Backend-Task



##  Tech Stacks
* NodeJS
* PostgreSQL
* ExpressJS
* Knex
* Heroku/Heroku-PG

## api endpoints
### for Department section
GET
```
api/get_all_departments
```
POST
```
api/department
```

PUT
```
api/department/:id
```

DELETE
```
api/department/:id
```
---
### for Employee section
GET
```
api/get_all_employees
```
POST
```
api/employee
```

PUT
```
api/employee/:id
```

DELETE
```
api/employee/:id
```
Trigger
```
CREATE TRIGGER department_trigger 
    AFTER INSERT  ON employees
    FOR EACH ROW EXECUTE PROCEDURE department_count();
```

Triggered Function
```
begin
update departments
set count=count+1
where id=new.department;
return new;
end;
```

## [postman collection](https://www.getpostman.com/collections/08f389f6bc94796d5efe)