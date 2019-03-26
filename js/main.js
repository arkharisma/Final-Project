var obj = [{
        "nama": "Raska Almashura",
        "email": "almashura@gmail.com",
        "lomba": "Business IT Case",
        "noHP": "081264538829"
    },
    {
        "nama": "Mohammad Iqbal",
        "email": "iqbal@gmail.com",
        "lomba": "Business IT Case",
        "noHP": "081264768829"
    },
    {
        "nama": "Shifani Adriani",
        "email": "shifani@gmail.com",
        "lomba": "Competitive Programming",
        "noHP": "081264538873"
    },
    {
        "nama": "Faris Zharfan Alif",
        "email": "faris@gmail.com",
        "lomba": "Application Development",
        "noHP": "081266638829"
    },
    {
        "nama": "Tata Feraro Mukarram",
        "email": "mukarramt@gmail.com",
        "lomba": "UI/UX Design",
        "noHP": "081264538669"
    },
    {
        "nama": "Rhama Permadi",
        "email": "rhamapermadi@gmail.com",
        "lomba": "Competitive Programming",
        "noHP": "081264538829"
    },
    {
        "nama": "Andi",
        "email": "andi@gmail.com",
        "lomba": "Application Development",
        "noHP": "081264538669"
    },
    {
        "nama": "Rizwan Anfa",
        "email": "ican@gmail.com",
        "lomba": "UI/UX Design",
        "noHP": "081264538866"
    },
    {
        "nama": "Annadya Rifani",
        "email": "annadya@gmail.com",
        "lomba": "Business IT Case",
        "noHP": "081266638829"
    },
    {
        "nama": "Firza Rinandha Nasution",
        "email": "firza@gmail.com",
        "lomba": "Business IT Case",
        "noHP": "081264666829"
    }
];

function showData() {
    var data = "";

    for (var i = 0; i < obj.length; i++) {
        data += "<tr><td>" + obj[i].nama + "</td>";
        data += "<td>" + obj[i].email + "</td>";
        data += "<td>" + obj[i].lomba + "</td>";
        data += "<td>" + obj[i].noHP + "</td></tr>";
    }

    return document.getElementById("data").innerHTML = data;
}

function search(type) {
    var data = document.getElementById("data");
    var tr = document.getElementsByTagName("tr");
    var td, txtValue;

    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var lomba = document.getElementById("lomba");
    var nohp = document.getElementById("noHP");

    if (type == 1) {
        var input = document.getElementById("nama");
        var filter = input.value.toUpperCase();
        // nama.value = "";
        email.value = "";
        lomba.value = "";
        nohp.value = "";

        for (var i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else if (type == 2) {
        var input = document.getElementById("email");
        var filter = input.value.toUpperCase();
        nama.value = "";
        // email.value = "";
        lomba.value = "";
        nohp.value = "";

        for (var i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else if (type == 3) {
        var input = document.getElementById("lomba");
        var filter = input.value.toUpperCase();
        nama.value = "";
        email.value = "";
        // lomba.value = "";
        nohp.value = "";

        for (var i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else if (type == 4) {
        var input = document.getElementById("noHP");
        var filter = input.value.toUpperCase();
        nama.value = "";
        email.value = "";
        lomba.value = "";
        // nohp.value = "";

        for (var i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

}