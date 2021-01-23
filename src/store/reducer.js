const defaultState = {
  list: [
    {
      key: '1',
      name: '朱雨辰',
      age: 32,
      sex: '男',
      studentNumber: '20210001',
      dateOfBirth: new Date().toDateString(),
      nation: '汉族',
      nativePlace: '陕西省西安市新城区长乐西路动半截巷94号1号楼4号',
      permanentAddress: '陕西省西安市新城区长乐西路动半截巷94号1号楼4号',
      liveAdress: '陕西省西安市灞桥区国棉四厂自强小区5号楼',
      sosPerson: 'peter',
      sosPersonPhone: '18092564370'
    },
    {
      key: '2',
      name: '王天赐',
      age: 12,
      sex: '男',
      studentNumber: '20210001',
      dateOfBirth: new Date().toDateString(),
      nation: '汉族',
      nativePlace: '陕西省西安市新城区长乐西路动半截巷94号1号楼4号',
      permanentAddress: '陕西省西安市新城区长乐西路动半截巷94号1号楼4号',
      liveAdress: '陕西省西安市灞桥区国棉四厂自强小区5号楼',
      sosPerson: 'peter',
      sosPersonPhone: '18092564370'
    },
    {
      key: '3',
      name: '张勤杰',
      age: 15,
      sex: '男',
      studentNumber: '20210001',
      dateOfBirth: new Date().toDateString(),
      nation: '汉族',
      nativePlace: '陕西省西安市新城区长乐西路动半截巷94号1号楼4号',
      permanentAddress: '陕西省西安市新城区长乐西路动半截巷94号1号楼4号',
      liveAdress: '陕西省西安市灞桥区国棉四厂自强小区5号楼',
      sosPerson: 'peter',
      sosPersonPhone: '18092564370'
    }
  ],
  selectStudent: null
}

function rducer (state = defaultState, action) {
  switch (action.type) {
    case 'POST_DATA':
      console.log(action.data)
      return state
    case 'SET_SELECT_STUDENT':
      return Object.assign({}, state, {
        selectStudent: action.data
      })
    case 'ADD_STUDENT_EVALUATE':
      return
    default:
      return state
  }
}

export default rducer