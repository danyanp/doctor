const doctorModel = require('../../model/doctorModel')
module.exports = async (req, res) => {
	// 数据总条数
	let count = await doctorModel.doctorCount()
	// 当前页
	let page = req.query.page || 1;
	// 分页大小
	let pageSize = 20
	// 总共页数
	let total = Math.ceil(count / pageSize)
	let result = await doctorModel.doctorList(pageSize,page);
	res.render('admin/doctor',{total,page,result})
}