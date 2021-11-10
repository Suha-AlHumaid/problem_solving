const whosOnline = (friends) => {
    // Your code here...
        const obj= {}
        const online=[];
        const offline=[];
        const away=[];
        friends.forEach(elem=> {
    if (elem.status == 'online'){
       if( elem.lastActivity <=10 ) {
    obj["online"]= online.push(elem.username)
       } else {
        obj["away"]= away.push(elem.username)
       } 
    }else {
      obj["offline"]= offline.push(elem.username) 
    }}
        );
       return obj
  }

    const obj =[{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy', 
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob', 
      status: 'online',
      lastActivity: 104
    }]
    console.log(whosOnline(obj));
