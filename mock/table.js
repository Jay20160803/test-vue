export default{
    path: '/tableData',
    data: {
        head: [
            {
                key: 'id',
                name: 'id'
            },
            {
              key: 'userName',
              name: '姓名'
            },
            {
                key: 'phone',
                name: 'phone'
            }
        ],
        body: [
          {
            "id": 20,
            "userName": "Andy2",
            "passWord": "123456",
            "phone": null,
          },
          {
            "id": 21,
            "userName": "Andy4",
            "passWord": "a94d5cd0079cfc8db030e1107de1addd1903a01b",
            "phone": null,
          },
            {
                'userName': '@cname',
                'sex|1': ["男", "女"],
                'age': '@natural(18, 60)',
                'address': '@city(true) ',
                'phone': '18816904369',
                'remark': '@cparagraph(1)',
                operation: 'edit,delete'
            },
            {
                'userName': '@cname',
                'sex|1': ["男", "女"],
                'age': '@natural(18, 60)',
                'address': '@city(true)',
                'phone': '18816904369',
                'remark': '@cparagraph(1)',
                operation: 'edit,delete'
            },
        ]
    }
}
