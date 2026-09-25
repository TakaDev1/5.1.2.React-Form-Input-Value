# 5.1.2.React-Form-Input-Value

## 目次

* [概要](#概要)
* [課題](#課題)
* [条件](#条件)
* [学習内容](#学習内容)
* [使用技術](#使用技術)
* [ディレクトリ構成](#ディレクトリ構成)
* [実装内容](#実装内容)
* [動作](#動作)
* [起動方法](#起動方法)

## 概要

Reactの`useState`を使用して、名前とメールアドレスの複数フィールドを1つのオブジェクトで管理するフォームを実装する練習アプリです。

フォーム送信時には入力内容を画面に表示し、送信後に入力フォームをリセットします。

## 課題

### 問題文

名前とメールアドレスの2つの入力フィールドを管理するフォームを作成してください。

送信ボタンを押すと、入力内容をTailwind CSSで緑背景のボックスに表示し、フォームはリセットされるようにしてください。

### 条件

1. TypeScriptで作成すること
2. `useState`にオブジェクトを使って複数フィールドを管理すること

## 学習内容

* `useState`によるフォーム状態管理
* オブジェクトによる複数フィールドの状態管理
* `onChange`による入力値の更新
* `onSubmit`によるフォーム送信
* `event.preventDefault()`によるページリロード防止
* スプレッド構文によるオブジェクトの更新
* 送信後のフォームリセット
* 送信内容と入力内容を別々のStateで管理
* カスタムフックによるフォームロジックの分離
* Tailwind CSSによるフォームのスタイリング

## 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS

## ディレクトリ構成

```text
src/
├── hooks/
│   └── useHandleForm.ts
├── pages/
│   └── FormPage.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## 実装内容

### 1. 複数フィールドをオブジェクトで管理

名前とメールアドレスを1つのStateで管理します。

```tsx
const [form, setForm] = useState({
  name: "",
  email: "",
});
```

### 2. 入力値を更新

名前を変更すると、`name`だけを更新します。

```tsx
setForm({
  ...form,
  name: event.target.value,
});
```

メールアドレスも同様に`email`だけを更新します。

```tsx
setForm({
  ...form,
  email: event.target.value,
});
```

`...form`によって、変更しないフィールドの値を保持します。

### 3. 送信内容を別のStateで管理

フォームをリセットすると入力値も空になるため、送信した内容を別のStateに保存します。

```tsx
const [submittedForm, setSubmittedForm] = useState({
  name: "",
  email: "",
});
```

送信時に入力内容を保存します。

```tsx
setSubmittedForm(form);
```

### 4. フォームをリセット

送信後に`form`を初期状態へ戻します。

```tsx
setForm({
  name: "",
  email: "",
});
```

### 5. 入力チェック

名前が未入力の場合は送信せず、アラートを表示します。

```tsx
if (!form.name.trim()) {
  alert("名前が未入力です");
  return;
}
```

### 6. 緑背景で送信内容を表示

Tailwind CSSのクラスを使用して、送信された内容を緑背景のボックスに表示します。

```tsx
<div className="bg-green-500 p-4 text-white">
  <p>名前: {submittedForm.name}</p>
  <p>メールアドレス: {submittedForm.email}</p>
</div>
```

## 動作

### 入力前

```text
名前            [                  ]
メールアドレス  [                  ]

                [      送信      ]
```

### 入力して送信

```text
名前            [山田太郎          ]
メールアドレス  [test@example.com  ]

                [      送信      ]
```

### 送信後

入力フォームはリセットされ、送信内容が緑背景のボックスに表示されます。

```text
名前            [                  ]
メールアドレス  [                  ]

                [      送信      ]

Result Form

┌──────────────────────────────┐
│ 名前: 山田太郎               │
│ メールアドレス: test@example.com │
└──────────────────────────────┘
```

## 起動方法

### パッケージのインストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。
