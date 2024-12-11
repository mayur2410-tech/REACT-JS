const express=require('express');
const app=express();
const cors = require ('cors')
app.use(cors())
const port=3000;


const search= {
    "kind": "youtube#searchListResponse",
    "etag": "5EkObcoK2g07iKtqgw2y2u6MjDE",
    "nextPageToken": "CDIQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 50
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "48ApFmBw6qC4hiBPEREz-73zyQA",
            "id": {
                "kind": "youtube#video",
                "videoId": "3B0rYACI9wg"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "WufphJiRnDrtEKXDxgg7oQJ2_og",
            "id": {
                "kind": "youtube#video",
                "videoId": "SqcY0GlETPk"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "atKsqvPhpQUeZrV0xqTpSo4VzZc",
            "id": {
                "kind": "youtube#video",
                "videoId": "eILUmCJhl64"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "VxqrB81WqeOHutC5K85FGsbM2lQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "Gg6fmnbfzgc"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "MLxAxXj6URIThXBNNT5yLBWnmYI",
            "id": {
                "kind": "youtube#video",
                "videoId": "B_z6L-QyzgA"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "FIINBxnXIPfNDo_arfxPSIl0at0",
            "id": {
                "kind": "youtube#video",
                "videoId": "x4rFhThSX04"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "RlMYpbi4k8VhhA16pHzluOqcCXo",
            "id": {
                "kind": "youtube#video",
                "videoId": "Tn6-PIqc4UM"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "y8zHnsmRgKwXYceBmWqSBnrHsyY",
            "id": {
                "kind": "youtube#video",
                "videoId": "HM0yI8adFJI"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "07-EhBWUOoBAsLRnl0TzPsU-WSM",
            "id": {
                "kind": "youtube#video",
                "videoId": "Uv7cKlZFXU8"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "sFJUfU49ZtukuQVkbdxTdS93NLM",
            "id": {
                "kind": "youtube#video",
                "videoId": "CgkZ7MvWUAA"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "hndBKEpAuC3WAxk0NZoZiqpnUBc",
            "id": {
                "kind": "youtube#video",
                "videoId": "RGKi6LSPDLU"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "VoyVdKf8bXFVTtLjLAbLXf0uAzU",
            "id": {
                "kind": "youtube#video",
                "videoId": "ZaC6oCIpjR0"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6hNwm5L06XBmLkxMW6xeFPHU9g4",
            "id": {
                "kind": "youtube#video",
                "videoId": "LDB4uaJ87e0"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "yXVcVc5urtNBIGr8xx5TAeiCBPE",
            "id": {
                "kind": "youtube#video",
                "videoId": "uGIr1uEvYLM"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "tGiSzCaEPRJtCZIhUWfQSQVzSNM",
            "id": {
                "kind": "youtube#video",
                "videoId": "4PO7L6HXoYM"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "e5Nqwc0kv5Bld3NFjk-AU52KhSE",
            "id": {
                "kind": "youtube#video",
                "videoId": "gY5sGvq-8h8"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "7aC5Ftd8oEjab1ouMptyzs5TgN8",
            "id": {
                "kind": "youtube#video",
                "videoId": "Rh3tobg7hEo"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "x_ZPJf5Vx5UxN3lgiKIsQ1AALmQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "qzfBZVH7b-Q"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "9intaH3qoUVRb0BAhRDMEfVdmY8",
            "id": {
                "kind": "youtube#video",
                "videoId": "E6tAtRi82QY"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "97yCXDuYZsgJa-XyGH1e1CWf5Wc",
            "id": {
                "kind": "youtube#video",
                "videoId": "qnwFpjIqsrA"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JUu3m4Q4yuOIfSt5uo5yGn6pYr8",
            "id": {
                "kind": "youtube#video",
                "videoId": "FxgM9k1rg0Q"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "TpOYWyH5Xg-oVBO0OSY-5NtZ-38",
            "id": {
                "kind": "youtube#video",
                "videoId": "sPF6NcMOKSQ"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "l_sMAA2LK79v8ePPx7v_PyqCCP4",
            "id": {
                "kind": "youtube#video",
                "videoId": "iTBlIkvnzI0"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "CepFfWHBnCJIS51jOOuoksO5ZHc",
            "id": {
                "kind": "youtube#video",
                "videoId": "AjQA-TkqgrE"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Rv6-2-1Juq5Yd2A1YSvGl32XSZ4",
            "id": {
                "kind": "youtube#video",
                "videoId": "s2skans2dP4"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "p0dVGbRPa3Nqtth4cAbw6Kv-ALc",
            "id": {
                "kind": "youtube#video",
                "videoId": "cPN4H0sSCHQ"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "MaIkKRDijExEUseV0cCLVqzkks0",
            "id": {
                "kind": "youtube#video",
                "videoId": "6aQgiJHReCI"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "11OxwIx8Ef4cV0h-_1rgnHNhOrc",
            "id": {
                "kind": "youtube#video",
                "videoId": "4_SvJO5sQ_w"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "gW8kazbD25nKYD1FsXDmGBYKUQk",
            "id": {
                "kind": "youtube#video",
                "videoId": "L0DWAVbdEaM"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "U25sW_24w6yCfjedjuzHN2u9VRI",
            "id": {
                "kind": "youtube#video",
                "videoId": "dvU6ZkK1p2E"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "RAAFHaaRC7WA4UaXmNSypRpEwAk",
            "id": {
                "kind": "youtube#video",
                "videoId": "dz458ZkBMak"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "B9HpnXyVKQTdfq0zszyrGBR20sI",
            "id": {
                "kind": "youtube#video",
                "videoId": "E9d0Jj5kVhA"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "m-cFN4aXluB23eAtDKM4XQLMc_w",
            "id": {
                "kind": "youtube#video",
                "videoId": "-tAtXatXjxo"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "0tvgxbr0l9CTIji020tJQ3RcmZA",
            "id": {
                "kind": "youtube#video",
                "videoId": "Vq6zobyg2nI"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "lMWLozMmcRWIqFWmkPEVqa0gaA8",
            "id": {
                "kind": "youtube#video",
                "videoId": "nHC5vbbQ6Ao"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "gHt0U2zSR0feTgE1Ap1NzYqak9w",
            "id": {
                "kind": "youtube#video",
                "videoId": "8oZ8lj3GBlc"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "LP-vsnZGIryNHyjCUgOEXZidlZw",
            "id": {
                "kind": "youtube#video",
                "videoId": "bYIhwrHHo3w"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ZsFYL0XSg0FLcAm3uoiZP4_meGw",
            "id": {
                "kind": "youtube#video",
                "videoId": "j1XNBuniCAc"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BDQk7OLwPKTu8fjGIOTRH4lXecI",
            "id": {
                "kind": "youtube#video",
                "videoId": "ynxVs2aB80M"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "7AnRhrBs07oEggG8HrVPbQH-Tuw",
            "id": {
                "kind": "youtube#video",
                "videoId": "2nIJjFBfguc"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "_MasPYiqVohdtwvPaCwlf9RrjXY",
            "id": {
                "kind": "youtube#video",
                "videoId": "QoYND0Hq5M4"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "bqxl5APlxRAube7q9k43cVuVeAs",
            "id": {
                "kind": "youtube#video",
                "videoId": "2sVeyo2tYbE"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "zNSGYSnW0BDlr0oRLeFQ-ccJ18s",
            "id": {
                "kind": "youtube#video",
                "videoId": "0CVADR1LIy8"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "EleB6xEv3_sz8mNTGFLwUhUT7Rg",
            "id": {
                "kind": "youtube#video",
                "videoId": "mVCbm0-LoQk"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dtWSKZsqle87DUnjhhJtcew-iNM",
            "id": {
                "kind": "youtube#video",
                "videoId": "otBk0RUzt80"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "kPjki5Cimn7cDm1UewjJqKQvEYs",
            "id": {
                "kind": "youtube#video",
                "videoId": "kCi1Utq7NmQ"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "r2PPcoXsFVKiLB6w0MgNZvSDfZc",
            "id": {
                "kind": "youtube#video",
                "videoId": "5r25Y9Vg2P4"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "CC-iee9s-Uqym9aS5aD6BLsNGWE",
            "id": {
                "kind": "youtube#video",
                "videoId": "dAzyNalyfnk"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "peIraiAT9gHXDi-Orw9rILgCCTM",
            "id": {
                "kind": "youtube#video",
                "videoId": "GeulXZP_kZ8"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "L75Wh6_vd1YRntzz1ZpP1K80sM4",
            "id": {
                "kind": "youtube#video",
                "videoId": "yAKot3_D4rs"
            }
        }
    ]
}

app.get('/search',(req,res)=>{
    res.json(search);
});

app.listen(port,()=>{
    console.log(`your Server is running on http://localhost:${port}`);
})