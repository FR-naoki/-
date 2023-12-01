const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: `mysecret`
}));

app.get('/viewcount', (req, res) => {
    res.send(`あなたはX回このページを表示しました`)
});

app.listen(3000, () => {
    console.log(`ポート3000でリクエスト受付中...`);
});
