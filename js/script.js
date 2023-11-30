class Person {
  constructor(height, weight) {
    this._height = height;
    this._weight = weight;
  }

  _calculateBMI() {
    return this._weight / Math.pow(this._height, 2);
  }

  _getCategory(bmi) {
    // Categorize BMI
    if (bmi < 18.5) return "Kurus";
    else if (bmi < 24.9) return "Normal";
    else if (bmi < 29.9) return "Gemuk";
    else return "Obesitas";
  }

  _getRecommendation(category) {
    // Provide recommendations based on BMI category
    switch (category) {
      case "Kurus":
        return "Anda mungkin perlu menambah berat badan.";
      case "Normal":
        return "Pertahankan berat badan Anda untuk kesehatan yang baik.";
      case "Gemuk":
        return "Pertimbangkan untuk mengurangi berat badan untuk kesehatan yang lebih baik.";
      case "Obesitas":
        return "Penting untuk berkonsultasi dengan profesional kesehatan untuk pengelolaan berat badan.";
      default:
        return "";
    }
  }

  // Provide ideal weight based on user height
  _hitungIdealMin() {
    return parseInt(18.5 * Math.pow(this._height / 100, 2).toFixed(2));
  }

  _hitungIdealMax() {
    return parseInt(24.9 * Math.pow(this._height / 100, 2).toFixed(2));
  }

  displayResult() {
    const bmi = this._calculateBMI();
    const category = this._getCategory(bmi);
    const recommendation = this._getRecommendation(category);
    const idealMin = this._hitungIdealMin();
    const idealMax = this._hitungIdealMax();

    document.getElementById(
      "hasilBMI"
    ).innerText = `Body Mass Index (BMI) Anda adalah`;
    document.getElementById("bmiAnda").innerText = `${bmi.toFixed(2)}`;

    document.getElementById(
      "berdasarkan"
    ).innerText = `Berat badan Anda masuk ke dalam kategori`;
    document.getElementById("category").innerText = `${category}`;

    document.getElementById(
      "ideal"
    ).innerHTML = `Berat badan ideal untuk tinggi Anda adalah antara`;
    document.getElementById(
      "angkaIdeal"
    ).innerHTML = `${idealMin} & ${idealMax} Kg`;

    document.getElementById("rekomendasi").innerText = `${recommendation}`;

    document.getElementById("hr1").style.display = "block";
    document.getElementById("hr2").style.display = "block";
    document.getElementById("hr3").style.display = "block";

    document.getElementById("hitungLagi").style.display = "block";
    document.getElementById("konsultasi").style.display = "block";

    /*
    // Display results in the HTML elements
    document.getElementById("hasilBMI").innerText = `BMI: ${bmi.toFixed(2)}`;
    document.getElementById(
      "bmiAnda"
    ).innerText = `BMI Anda adalah ${category}`;
    document.getElementById("berdasarkan").innerText = "Berdasarkan BMI:";
    document.getElementById("category").innerText = category;
    document.getElementById("rekomendasi").innerText = recommendation;

   
    // ...

    // Show hidden elements
    document.getElementById("hr1").style.display = "block";
    document.getElementById("hr2").style.display = "block";
    document.getElementById("hr3").style.display = "block";
    document.getElementById("konsultasi").style.display = "inline-block";
    document.getElementById("hitungLagi").style.display = "inline-block";
    */
  }
}

class PersonInCM extends Person {
  constructor(height, weight) {
    super(height, weight);
  }

  // Override calculateBMI for height in cm
  _calculateBMI() {
    return super._calculateBMI() * 10000;
  }
}

function hitungBMI(event) {
  event.preventDefault();

  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const berat = parseFloat(document.getElementById("berat").value);

  var text = document.getElementById("hide");
  text.style.display = "none";

  // Use PersonInCM  based on your unit selection
  const person = new PersonInCM(tinggi, berat);

  person.displayResult();
}

function hitungLagi() {
  // Reset form and hide results
  document.forms["bmiForm"].reset();
  document.getElementById("hr1").style.display = "none";
  document.getElementById("hr2").style.display = "none";
  document.getElementById("hr3").style.display = "none";
  document.getElementById("konsultasi").style.display = "none";
  document.getElementById("hitungLagi").style.display = "none";
  // Clear previous results
  document.getElementById("ideal").innerHTML = "";
  document.getElementById("angkaIdeal").innerHTML = "";
  document.getElementById("hasilBMI").innerText = "";
  document.getElementById("bmiAnda").innerText = "";
  document.getElementById("berdasarkan").innerText = "";
  document.getElementById("category").innerText = "";
  document.getElementById("rekomendasi").innerText = "";
  // Add previous results
  document.getElementById("hide").style.display = "";
}
