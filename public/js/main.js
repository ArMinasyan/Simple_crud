function updateUser(id) {
    document.getElementById('userInfo_firstName').value = document.getElementById('fname_' + id).innerHTML;
    document.getElementById('userInfo_lastName').value = document.getElementById('lname_' + id).innerHTML;
    document.getElementById('userInfo_email').value = document.getElementById('email_' + id).innerHTML;

    if (document.getElementById('add').innerHTML == "Add")
        document.getElementById('add').innerHTML = "Save"
    _id = id.split("_")[1];

}

let _id;

function addUser(e) {
    let userInfo = {
        firstName: '',
        lastName: '',
        email: ''
    };

    userInfo['firstName'] = document.getElementById('userInfo_firstName').value;
    userInfo['lastName'] = document.getElementById('userInfo_lastName').value;
    userInfo['email'] = document.getElementById('userInfo_email').value;
    if (document.getElementById('add').innerHTML == 'Save') {
        axios({
            method: 'PUT',
            url: "/api/user/" + _id,
            data: userInfo,
        }).then(res => {
            if (res.data.updated) alert(res.data.msg);
            else alert("Error");
        })
    } else {
        axios({
            method: 'POST',
            url: "/api/user/",
            data: userInfo,
        }).then(res => {
            if (res.data.inserted) alert(res.data.msg);
            else alert("Error");
        })
    }
}

document.getElementById('add').addEventListener('click', addUser);

function deleteUser(id) {
    axios({
        method: 'DELETE',
        url: "/api/user/" + id.split("_")[1],
    }).then(res => {
        if (res.data.deleted) alert(res.data.msg);
        else alert("Error");
    })
}

axios({
    method: 'GET',
    url: "/api/user",

}).then(response => {
    const tbody = document.getElementById('tbody');

    response.data.forEach(el => {
        tbody.insertAdjacentHTML('beforeend', `
        <tr>
                <td id='fname_${el._id}'>${el.firstName}</td>
                <td id='lname_${el._id}'>${el.lastName}</td>
                <td id='email_${el._id}'>${el.email}</td>
                <td>
                    <button id="d_${el._id}" onClick="deleteUser(this.id)">Delete</button>
                    <button id="e_${el._id}" onClick="updateUser(this.id)">Edit</button>
                <input type="checkbox" id="db_${el._id}" />
                    </td>
        </tr>
        `)
    })

})