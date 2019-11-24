var obj = JSON.parse($response.body);
obj=
{
    "status": 1,
    "error": null,
    "secretKey": "yZMJipuPiFfAOtQW5WPO",
    "data": {
        "premium": 1,
        "premiums": [{
            "id": "14197",
            "user_id": "24612",
            "premium_type_id": "1",
            "start_time": "2018-03-15 22:56:09",
            "end_time": "2999-09-13 23:59:59",
            "renewal_date": "2018-09-13 11:51:56",
            "modify_by": "1"
        }]
    },
    "api_version": "1.0"
};
$done({body: JSON.stringify(obj)});