function cekdata(){

    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let line = document.getElementById("line").value;
    let email = document.getElementById("email").value;
    let no = document.getElementById("no").value;
    let alamat = document.getElementById("alamat").value;

    

    if(nama && umur && line && email && no && alamat)
    {
        alert("sukses mendaftar! silakan kembali ke home");
        location.href="home.html";
       
        
    }else{
        if(!nama)alert("Nama harus Diisi!");
        if(!umur) alert("Umur harus Diisi");
        if(!line) alert("Line harus Diisi");
        if(!email) alert("Email harus Diisi");
        if(!no) alert("Nomor harus Diisi");
        if(!alamat) alert("Alamat harus Diisi");
    }
}