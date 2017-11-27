function a(name = 'Diana') {
    b.bind(name);
    b();
}
function b() {
    console.log(this.name);
}
a();