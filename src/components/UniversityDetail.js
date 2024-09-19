import React from 'react';
import logo from '../assets/images/logo.png'; //logo图片
import bg from '../assets/images/bg.jpg'; //背景图片
import Panel from '../components/Panel'; //数据面板组件
import panelImage from '../assets/images/panel.png'; // 边框图片
import InfoItem from '../components/InfoItem'; //信息项组件
import NotFound from "../page/NotFound"; // 404 页面

// 院校具体信息
const UniversityDetail = ({ universityName }) => {
    // 数据
    const universityDetails = [
      { id: 1, name: '上海应用技术大学', logo: logo, bg: bg,
        description: '上海应用技术大学办学肇始于1954年，现为上海市重点建设的高水平地方大学，是一所具有学士、硕士和博士培养层次的、特色鲜明的应用创新型大学。学校入选上海市高水平地方大学重点建设单位、上海高等学校一流本科建设引领计划和一流研究生教育引领计划、上海市深化创新创业教育改革示范高校、上海高校课程思政整体改革领航高校、国家科技人才评价改革试点单位、国家知识产权试点高校、上海市专利工作示范单位、上海市依法治校示范校，入选中国科技成果转化百强高校。2018年以来，在上海高校分类评价中连续六年跻身应用技术型高校第一梯队。', //描述
        schoolMotto: '明德、明学、明事', //校训
        history: '上海应用技术大学办学肇始于1954年，现为上海市重点建设的高水平地方大学，是一所具有学士、硕士和博士培养层次的、特色鲜明的应用创新型大学。2000年，学校由上海冶金高等专科学校、上海轻工业高等专科学校和上海化工高等专科学校三所全国示范性普通高等工程专科重点建设学校，合并组建成上海应用技术学院。2006年，原国家轻工业部所属上海香料研究所并入学校。2016年，学校更名为“上海应用技术大学”。2021年，学校获批博士学位授予单位，并入选上海高水平地方大学重点建设单位。', //学校的历史
        address: '奉贤校区(),徐汇校区()', //校区地址
        officeWeb: 'https://www.sit.edu.cn/', //官网
        admissionOffice: 'https://adm.sit.edu.cn/', //招生办


      },
    ]

    // 根据大学名称查找大学信息
    const university = universityDetails.find((university) => university.name === universityName);

    // 如果未找到该 universityId 对应的大学，返回提示
    if (!university) {
      return <NotFound />;
    }

  return (
    // 左右布局
    <div class="flex m-4 min-h-screen">
      {/* 大学具体信息:左侧面板 */}
      <Panel panelImage={panelImage} className="w-1/2 mr-2">
        <div className="relative m-4">
          <img src={university.bg} alt="bg" />
          <img 
            src={university.logo} 
            className="absolute top-0 left-0 m-4" 
            alt="logo"
          />
        </div>
        <div>
          <p className="m-4 text-textTable-white" style={{ textIndent: '2em' }}>{university.description}</p>
        </div>
      </Panel>

      {/*大学具体信息:右侧面板 */}
      <Panel panelImage={panelImage} className="w-1/2 ml-2">
        <InfoItem h3Text="学校名称：" pText={university.name} />
        <InfoItem h3Text="校训：" pText={university.schoolMotto} />
        <InfoItem h3Text="学校发展历史：" pText={university.history} />
        <InfoItem h3Text="校区地址：" pText={university.address} />
        {/* TODO 链接跳转：官网和招生办 */}
        <InfoItem h3Text="官网：" pText={university.officeWeb} />
        <InfoItem h3Text="招生办：" pText={university.admissionOffice} />
      </Panel>
    </div>
  );
};

export default UniversityDetail;
