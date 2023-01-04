The task given to achieve was to take the dataset from the API given and display "id","firstname", "lastname" and "email" from the dataset and also to get the data from the dataset using firstname 
**********************************************************************************************************************

I have made use of expressjs and sequelize where expressjs created my application and sequelize is used for my database

step1: i created my application and created connection for my database using sequelize where i first initialised the sequelize and migrated it and created connection for my database and created a table where i added all the datas available in the dataset the below image shows the datas in my database 
**********************************************************************

![my data](https://user-images.githubusercontent.com/112620475/210603098-4ba450b6-5a17-4fd6-ae88-d3bbdf196cab.jpg)

***********************************************************************************************************************************************
step2: using my data present in my database i used Sequelize.findAll() query to get all the datas in it Since i need to get only ID, Firstname, Lastname, Email i used attirbute inside it and the output is attached below 
************************************************************************************************************************************************

![geting_all users ](https://user-images.githubusercontent.com/112620475/210603618-6c4b06ff-dd0f-4d73-aa67-ca0911e49a12.jpg)
************************************************************************************************************************************************
step3: to get the data using firstname i used same findAll() query with a where condition inside it 

************************************************************************************************************************************
![firstname](https://user-images.githubusercontent.com/112620475/210603828-1e838bc5-4cea-4a57-9199-c2f116348aab.jpg)

