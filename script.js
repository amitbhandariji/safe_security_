function shareLocation() {

  if (!navigator.geolocation) {
    alert("Geolocation is not supported in this browser");
    return;
  }

  document.getElementById("output").innerHTML = "📡 Getting your location...";

  navigator.geolocation.getCurrentPosition(
    function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const mapLink = `https://www.google.com/maps?q=${lat},${lon}`;

      document.getElementById("output").innerHTML = `
        ✅ Location Shared Successfully!<br><br>
        📍 <a href="${mapLink}" target="_blank">Open Live Location</a>
      `;

    },
    function(error) {
      alert("Permission denied or unable to fetch location.");
    }
  );
}
