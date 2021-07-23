<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    ---------------------------------------------------------------------------

    <!-- POSTS:

    - GET https://striveschool-api.herokuapp.com/api/posts/  
    Pra fazer o map de todos os posts 
    Retrieve posts
    - POST https://striveschool-api.herokuapp.com/api/posts/
    Creates a new post
    
    - PUT https://striveschool-api.herokuapp.com/api/posts/{postId}
    Edit a given post (note: you can only edit your posts)
    - DELETE https://striveschool-api.herokuapp.com/api/posts/{postId}
    Removes a post
    
    ---------------------------------------------------------------------------

    POST Model:
    {
        "_id": "5d93ac84b86e220017e76ae1", //server generated
        "text": "this is a text 12312 1 3 1",  <<--- THIS IS THE ONLY ONE YOU'LL BE SENDING!!!
        "username": "admin", //server generated
        "createdAt": "2019-10-01T19:44:04.496Z", //server generated
        "updatedAt": "2019-10-01T19:44:04.496Z", //server generated
        "__v": 0 //server generated
    } -->


    <script>

        // Token and UserId can be retrieve from LocalStorage
        // window.location.getItem('keyName')

        // Get all POSTS
        const getAllPosts = async () => {
        try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1MjY0YjBlZmU3ODAwMTU1YzM0OTQiLCJpYXQiOjE2MjY2Nzg4NTksImV4cCI6MTYyNzg4ODQ1OX0.6ORdBZ7FK3uYf7yARqOH-BkFadMS21ksyxvAKbCQSgM",
                    },
                })
                console.log('inside get all POSTS AFTER FETCH', response)
                let dataRequested = await response.json()
                console.log(dataRequested)
            } catch (e) {
                console.log(e)
                return e
            }
        }
        getAllPosts()


        // POST https://striveschool-api.herokuapp.com/api/posts/

        // const NewPost = async () => {
        //     let postText ={
        //         text: 'dasdas dsad asd asd asd sadasd'
        //     }
        //     try {
        //         let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
        //             method: 'POST',
        //             headers: {
        //                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1MjY0YjBlZmU3ODAwMTU1YzM0OTQiLCJpYXQiOjE2MjY2Nzg4NTksImV4cCI6MTYyNzg4ODQ1OX0.6ORdBZ7FK3uYf7yARqOH-BkFadMS21ksyxvAKbCQSgM",
        //                 "Content-Type": "application/json"
        //             },
        //             body: JSON.stringify(postText)
        //         })
        //         console.log('inside get all POSTS AFTER FETCH', response)
        //         let dataRequested = await response.json()
        //         console.log(dataRequested)
        //     } catch (e) {
        //         console.log(e)
        //         return e
        //     }
        // }
        // NewPost()

        //   const EditPost = async () => {
        //     let postText ={
        //         text: 'dasdas dsad asd asdaas dasd as asd dasd asd asd asd asda sdas dasgfd fgh dgdfgdfgdfgdsd asd sadasd'
        //     }
        //     try {
        //         let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/60f87f9a92bb2500152066c9', {
        //             method: 'PUT',
        //             headers: {
        //                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1MjY0YjBlZmU3ODAwMTU1YzM0OTQiLCJpYXQiOjE2MjY2Nzg4NTksImV4cCI6MTYyNzg4ODQ1OX0.6ORdBZ7FK3uYf7yARqOH-BkFadMS21ksyxvAKbCQSgM",
        //                 "Content-Type": "application/json"
        //             },
        //             body: JSON.stringify(postText)
        //         })
        //         console.log('inside get AFTER FETCH PUT method', response)
        //         let dataRequested = await response.json()
        //         console.log(dataRequested)
        //     } catch (e) {
        //         console.log(e)
        //         return e
        //     }
        // }
        // EditPost()

        //   const DeletePost = async () => {
        //     let postText ={
        //         text: 'dasdas dsad asd asdaas dasd as asd dasd asd asd asd asda sdas dasgfd fgh dgdfgdfgdfgdsd asd sadasd'
        //     }
        //     try {
        //         let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/60f87f9a92bb2500152066c9', {
        //             method: 'DELETE',
        //             headers: {
        //                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1MjY0YjBlZmU3ODAwMTU1YzM0OTQiLCJpYXQiOjE2MjY2Nzg4NTksImV4cCI6MTYyNzg4ODQ1OX0.6ORdBZ7FK3uYf7yARqOH-BkFadMS21ksyxvAKbCQSgM",      
        //             },
                   
        //         })
        //         console.log('inside DELETE method POSTS AFTER FETCH', response)
        //         let dataRequested = await response.json()
        //         console.log(dataRequested)
        //     } catch (e) {
        //         console.log(e)
        //         return e
        //     }
        // }



    </script>
</body>

</html>