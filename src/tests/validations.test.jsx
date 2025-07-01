import { beforeEach, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import App from "../App.jsx";
import "../LoginForm.jsx";
import path from "path";
import fs from "fs";

const loginCode = fs.readFileSync(
  path.resolve(__dirname, "../LoginForm.jsx"),
  "utf-8"
);

beforeEach(() => {
  render(<App />);
});

test("Sayfa açıldığında Gönder butonu disabled mı?", async () => {
  const sendButton = screen.getByTestId("send");
  expect(sendButton).toBeDisabled();
});

test("Login componentinde isValid statei tanımlanmış mı?", () => {
  const pattern = /const\s*\[\s*isValid\s*,\s*setIsValid\s*\]\s*=/;

  expect(loginCode).toMatch(pattern);
});

test("Login componentindeki isValid stateinin başlangıç değeri false olarak belirlenmiş mi?", () => {
  const pattern =
    /const\s*\[\s*isValid\s*,\s*setIsValid\s*\]\s*=\s*(?:React\.)?useState\s*\(\s*false\s*\)/;

  expect(loginCode).toMatch(pattern);
});

test("Login componentinde errors statei tanımlanmış mı?", () => {
  const pattern = /const\s*\[\s*errors\s*,\s*setErrors\s*\]\s*=/;
  expect(loginCode).toMatch(pattern);
});

test("Email yanlış doldurulunca hata mesajı görünüyor mu?", async () => {
  const user = userEvent.setup();
  const email = screen.getByTestId("email");
  await user.type(email, "omer@co");
  const error = screen.getByRole("email-error");
  expect(error).toHaveTextContent("Geçerli bir email adresi yaz");
});

test("Email yanlış doldurulunca labelına hasError classı ekleniyor mu?", async () => {
  const user = userEvent.setup();
  const email = screen.getByTestId("email");
  await user.type(email, "omer@co");

  const label = screen.getByTestId("email-label");
  expect(label).toHaveClass("hasError");
});

test("Email doğru doldurulunca hata mesajı ortadan kalkıyor mu?", async () => {
  const user = userEvent.setup();
  const email = screen.getByTestId("email");

  await user.type(email, "omer@co");
  const error = screen.getByRole("email-error");
  expect(error).toHaveTextContent("Geçerli bir email adresi yaz");
  await user.type(email, "de2work.co");
  expect(error).not.toBeInTheDocument();
});

test("Password yanlış doldurulunca hata mesajı görünüyor mu?", async () => {
  const user = userEvent.setup();
  const password = screen.getByTestId("password");

  await user.type(password, "123");
  const error = screen.getByRole("password-error");
  expect(error).toHaveTextContent("Şifre en az 4 karakterden oluşmalı");
});

test("Password yanlış doldurulunca labelına hasError classı ekleniyor mu?", async () => {
  const user = userEvent.setup();
  const password = screen.getByTestId("password");

  await user.type(password, "123");
  const label = screen.getByTestId("password-label");
  expect(label).toHaveClass("hasError");
});

test("Password doğru doldurulunca hata mesajı ortadan kalkıyor mu?", async () => {
  const user = userEvent.setup();
  const password = screen.getByTestId("password");

  await user.type(password, "123");
  const error = screen.getByRole("password-error");
  expect(error).toHaveTextContent("Şifre en az 4 karakterden oluşmalı");
  await user.type(password, "4");
  expect(error).not.toBeInTheDocument();
});

test("Kullanım koşulları kabul edilmediğinde buton disabled kalmaya devam ediyor mu?", async () => {
  const user = userEvent.setup();

  const email = screen.getByTestId("email");
  const password = screen.getByTestId("password");

  const sendButton = screen.getByTestId("send");
  expect(sendButton).toBeDisabled();
  await user.type(email, "omer@code2work.co");
  await user.type(password, "123456");

  expect(sendButton).toBeDisabled();
});

test("State değişimine bağlı işlemler yapmak için useEffect hooku kullanılmış mı?", () => {
  const pattern = /useEffect\s*\(\s*\(\s*.*?\)\s*=>/;

  expect(loginCode).toMatch(pattern);
});

test("Form doğru bilgiler ile doldurulunca Gönder butonu enabled oluyor mu?", async () => {
  const user = userEvent.setup();

  const email = screen.getByTestId("email");
  const password = screen.getByTestId("password");
  const terms = screen.getByTestId("terms");
  const sendButton = screen.getByTestId("send");
  expect(sendButton).toBeDisabled();
  await user.type(email, "omer@code2work.co");
  await user.type(password, "123456");
  await user.click(terms);
  expect(sendButton).not.toBeDisabled();
});
