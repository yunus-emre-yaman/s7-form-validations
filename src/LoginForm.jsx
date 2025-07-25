import { useState, useEffect } from "react";

// bu fonksiyon, parametre olarak aldığı email geçerliyse true, değilse false döner
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const initialErrors = {
  email: "",
  password: "",
  terms: "",
};

const errorMessages = {
  email: "Geçerli bir email adresi yaz",
  password: "Şifre en az 4 karakterden oluşmalı",
  terms: "Kullanım koşullarını kabul etmelisiniz",
};

export default function LoginForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    value = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "email" && !validateEmail(value)) {
      error = errorMessages.email;
    }
    if (name === "password" && value.length < 4) {
      error = errorMessages.password;
    }
    if (name === "terms" && !value) {
      error = errorMessages.terms;
    }

    setErrors({ ...errors, [name]: error });
  };

  useEffect(() => {
    const noErrors = Object.values(errors).every((err) => err === "");
    const allValid =
      validateEmail(formData.email) &&
      formData.password.length >= 4 &&
      formData.terms;
    setIsValid(noErrors && allValid);
  }, [errors, formData]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="form">
      <h1>Kayıt ol</h1>
      <form onSubmit={handleSubmit}>
        <label
          className={`form-input-line ${errors.email ? "hasError" : ""}`}
          data-testid="email-label"
        >
          <span className="form-label">Email</span>
          <input
            className="form-input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            data-testid="email"
            type="text"
          />
          {errors.email && (
            <span className="error-message" role="email-error">
              {errors.email}
            </span>
          )}
        </label>

        <label
          data-testid="password-label"
          className={`form-input-line ${errors.password ? "hasError" : ""}`}
        >
          <span className="form-label">Şifre</span>
          <input
            className="form-input"
            name="password"
            onChange={handleChange}
            value={formData.password}
            data-testid="password"
            type="password"
          />
          {errors.password && (
            <span className="error-message" role="password-error">
              {errors.password}
            </span>
          )}
        </label>

        <label
          className={`form-ch-line ${errors.terms ? "hasError" : ""}`}
        >
          <input
            type="checkbox"
            name="terms"
            data-testid="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <span className="ch-label">Kullanım koşullarını kabul ediyorum.</span>
        </label>
        {errors.terms && (
          <span className="error-message" role="terms-error">
            {errors.terms}
          </span>
        )}

        <button
          className="send-button"
          data-testid="send"
          disabled={!isValid}
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
