# 247 API Server
This app uses:
[Express](https://expressjs.com/) framework
[AWS Elastic Beanstalk](http://aws.amazon.com/elasticbeanstalk/). 

## URLs
1. ***Production Server***
   - > http://247api-env.eba-ndr8iuri.us-west-2.elasticbeanstalk.com/
2. ***Development Server***
   - > https://localhost:3000/

## Routes
**Get Questions**
----
  Returns todays questions

* **URL**

  /questions

* **Method:**

  `POST`
  
* **Data Params**

   **Required:**
 
   `date=[Date]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ name: String, numbers: [Numbers], time: String, solveRate: String, solutions: [String] }, ...]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
