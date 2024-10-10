### TODO

#### 直近データ(履歴)の取得URL

https://attendance.moneyforward.com/api/external/web/attendance_histories?user_time=2024-10-10T03:39:39.960Z

```json
{
    "attendance_histories": [
        {
            "date": "2024-10-10",
            "edit_path": "/my_page/attendances/2024-10-10/edit",
            "apply_path": "/my_page/workflow_requests/attendances/new?date=2024-10-10",
            "records": [
                {
                    "event": "start_break",
                    "time": "12:05"
                },
                {
                    "event": "clock_in",
                    "time": "10:00"
                }
            ]
        },
        {
            "date": "2024-10-09",
            "edit_path": "/my_page/attendances/2024-10-09/edit",
            "apply_path": "/my_page/workflow_requests/attendances/new?date=2024-10-09",
            "records": [
                {
                    "event": "clock_out",
                    "time": "19:00"
                },
                {
                    "event": "end_break",
                    "time": "13:00"
                },
                {
                    "event": "start_break",
                    "time": "12:05"
                },
                {
                    "event": "clock_in",
                    "time": "10:00"
                }
            ]
        },
        {
            "date": "2024-10-08",
            "edit_path": "/my_page/attendances/2024-10-08/edit",
            "apply_path": "/my_page/workflow_requests/attendances/new?date=2024-10-08",
            "records": [
                {
                    "event": "clock_out",
                    "time": "19:00"
                },
                {
                    "event": "end_break",
                    "time": "13:00"
                },
                {
                    "event": "start_break",
                    "time": "12:05"
                },
                {
                    "event": "clock_in",
                    "time": "10:00"
                }
            ]
        }
    ]
}
```


#### 現在のステータス返却

https://attendance.moneyforward.com/api/external/web/attendance_statuses/me?user_time=2024-10-10T03:39:39.960Z

```json
{"status":"breaking","recommended_next_actions":["end_break"]}
```
