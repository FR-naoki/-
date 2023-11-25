const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log(`ポート3000でリクエスト受付中...`);
});