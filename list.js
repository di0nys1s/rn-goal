fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });

export default list;
