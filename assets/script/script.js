fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={28f128ce88a7302f78619a0d00df0cfa}')
.then(response => {
    return response.json();
})
.then(users => {
    console.log(users);
})