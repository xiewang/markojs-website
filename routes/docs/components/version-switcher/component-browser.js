module.exports = {
    switchVersion(e) {
        var location = e.target.value;
        if (location) {
            window.location.href = location;
        }
    }
}