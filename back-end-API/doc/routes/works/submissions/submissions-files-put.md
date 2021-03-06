Add Submission File
===
### Description
Add a file to **submission_id**.

### Method
PUT

### URL Structure
`api/works/submissions/files`

### User Privileges
* `Other`: Full Access

### Request Body
| Field       | Type   | Required? | Description                            |
|-------------|--------|-----------|----------------------------------------|
| **submission_id** | String | Yes       | The id of the work for the submission. |
| **content** | String | Yes       | The code of this submission.           |
| **name**    | String | Yes       | The name of this submission.           |

### Validation
| Action                                            | Status | Expected Response                                                               |
|---------------------------------------------------|--------|---------------------------------------------------------------------------------|
| **submission_id** not inputted.                         | 400    | `{ "code": "OBJECT_MISSING_REQUIRED_PROPERTY","param": [ "#/submission_id" ] }` |
| Additional Fields inputted.                       | 400    | `{ "code": "OBJECT_ADDITIONAL_PROPERTIES","param": [ "#/<field>" ] }`           |
| No active submission with **submission_id**.            | 404    | `{ "code": "NOT_FOUND", "param": [ "#/submission_id" ] }`                       |

#### Example Request Body
```
{
    "submission_id": "5935ed0e5ecf04cc3388de8e",
    "name": "a1",
    "file": "def func(a, b):\n    pass"
}
```
#### Example Response
```
{
    "status": 200,
    "data": "2315ed0e5ecf04cc3388de8e" // the file_id
}
```
