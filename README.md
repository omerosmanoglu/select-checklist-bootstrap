<p align="center">
  <img src="assets/banner.jpg" alt="Bootstrap Select Checklist" width="100%" />
</p>

# select-checklist-bootstrap

> Bootstrap 5 compatible select checklist with checkbox UI and native form support.

- English Description

    This plugin transforms a native HTML <select multiple> element into a modern, user-friendly checkbox list dropdown, fully styled to match Bootstrap 5’s form-select appearance.

    The primary goal is to offer a multi-select UI that feels natural to users and blends seamlessly with Bootstrap forms — without breaking the layout or requiring external libraries.

    Selections update the original <select> element behind the scenes, ensuring full compatibility with native form submission and browser behavior.

    It's dependency-free, lightweight, and easy to integrate with just a few lines of JavaScript.

- Türkçe Açıklama (detaylı)

    Bu eklenti, Bootstrap 5 görünümüne tamamen uyumlu bir şekilde, <select multiple> etiketini görsel olarak checkbox’lı bir listeye dönüştürür. Amaç, formların estetik yapısını bozmadan kullanıcıya daha anlaşılır ve sezgisel çoklu seçim imkanı sunmaktır.

    Seçim listesi, Bootstrap'ın form-select görünümünü korur ve kullanıcı seçim yaptığında arka planda orijinal <select> öğesi güncellenir. Böylece form gönderimi sırasında tüm veriler standart HTML form yapısıyla çalışır.

    Hiçbir bağımlılık içermez (örneğin jQuery gerekmez) ve sadece birkaç satır JavaScript ile entegre edilebilir.

## Features
- Looks like Bootstrap's `form-select`
- Preserves original `<select multiple>`
- No dependencies, no jQuery required
- Pure JavaScript
- Easy to use and style

## 🔗 Demo

Test it live: [https://demo.osmanoglu.net.tr/select-checklist/](https://demo.osmanoglu.net.tr/select-checklist/)

## 🖼️ Screen

![Select Checklist Screenshot](assets/screenshot.png)


## Usage
```html
<select multiple class="form-select select-checklist" name="ingredients">
  <option value="cheese">Cheese</option>
  ...
</select>
