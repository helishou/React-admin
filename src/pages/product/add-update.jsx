import React, { Component } from "react";
import { Card, Form, Input, Cascader, Upload, Button } from "antd";
import LinkButton from "../../component/link-button";
import { RollbackOutlined } from "@ant-design/icons";
import { options } from "less";
import { reqCategorys, reqCategory } from "../../api";
import PicturesWall from './pictures-wall'
const Item = Form.Item;
const TextArea = Input.TextArea;
export default class AddUpdate extends Component {
  state = {
    options: [],
    setOptions: () => {},
    cName1: "",
    cName2: "",
  };

  constructor(props){
      super(props)
      //创造保存ref标识的标签对象的容器
      this.pw = React.createRef()
  }
  componentDidMount() {
    this.getCategorys("0");
  }
  /* async返回值是新的promise对象,promise结果和值由async的结果 */
  getCategorys = async (parentId) => {
    const result = await reqCategorys(parentId);
    // debugger
    if (result.data.status === 0) {
      const categorys = result.data.data;
      if (parentId === "0") {
        this.initOptions(categorys);
      } else {
        return categorys; //返回
      }
      // console.log(categorys)
    }
  };

  initOptions = async(categorys) => {
    const options = categorys.map((c) => ({
      //注意小括号
      value: c._id,
      label: c.name,
      isLeaf: false,
    }));
    //如果是一个二级分类列表
    const {isUpdate,product} = this
    const {pCategoryId,categoryId} = product
    if(isUpdate&&pCategoryId!=='0'){
        //获取对应的二级分类列表
        const subCategorys= await this.getCategorys(pCategoryId)
        //生成二级下拉列表的options
        const childOptions = subCategorys.map((c) => ({
            //注意小括号,生成二级列表
            value: c._id,
            label: c.name,
            isLeaf: true,
          }))
          //关联到对应的一级option
          //找到对应的一级对象
          const targetOption=options.find(option=>option.value===pCategoryId)
          targetOption.children= childOptions
    }
    // console.log(options)
    this.setState({ options });
    // console.log(this.state.options)
  };
  //如何判断是修改还是更新
  UNSAFE_componentWillMount() {
    console.log(this.props.location);
    const product = this.props.location.state.desc;
    //保存是否更新的表示
    this.isUpdate = !!product;
    this.product = product || {};
  }
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  /* 用来加载下面数字组 */
  loadData = async (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    //显示loading
    targetOption.loading = true;
    //   load options lazily
    //获取二级分类列表
    const subCategorys = await this.getCategorys(targetOption.value);
    // console.log(subCategorys)
    if (subCategorys && subCategorys.length > 0) {
      const cOptions = subCategorys.map((c) => ({
        //注意小括号,生成二级列表
        value: c._id,
        label: c.name,
        isLeaf: true,
      }));
      targetOption.children = cOptions;
    } else {
      //当前分类没有二级分类
      targetOption.isLeaf = true;
    }
    targetOption.loading = false;
    this.setState({ options: [...this.state.options] });
  };
  render() {
    const { isUpdate } = this;
    const title = (
      <span>
        <LinkButton onClick={() => this.props.history.goBack()}>
          <RollbackOutlined />
        </LinkButton>
        {isUpdate ? "修改商品" : "添加商品"}
      </span>
    );
    const formItemLayout = {
      labelCol: { span: 3 }, //左侧label宽度
      wrapperCol: { span: 8 }, //右侧包裹输入框宽度
    };
    const onFinish = (values: any) => {
      console.log("Success:", values);
      const imgs=this.pw.current.getImgs()
      console.log('imgs',imgs)
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    // function onChange(value) {
    //   console.log(value);
    // }
    const {
      name,
      desc,
      price,
      detail,
      imgs,
      pCategoryId,
      categoryId,
    } = this.product;
    const categoryIds = [];
    if (isUpdate) {
      console.log("pCategoryId", pCategoryId);
      if (pCategoryId !== "0") {
        categoryIds.push(pCategoryId);
      }
    }
    categoryIds.push(categoryId);

    return (
      <Card title={title}>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Item
            name="productName"
            label="商品名称"
            initialValue={name}
            rules={[{ required: true, message: "必须输入商品名称!" }]}
          >
            <Input placeholder="请输入商品名称"></Input>
          </Item>
          <Item name="productDes" label="商品描述" initialValue={desc}>
            <TextArea
              placeholder="请输入商品描述"
              autoSize={{ minRows: 2, maxRows: 6 }}
            ></TextArea>
          </Item>
          <Item
            name="productPrice"
            label="商品价格"
            initialValue={price}
            rules={[
              { required: true, message: "必须输入商品价格!" },
              {
                validator: (_, value) =>
                  !value || value * 1 > 0
                    ? Promise.resolve()
                    : Promise.reject(new Error("商品价格必须大于0")),
              },
            ]}
          >
            <Input
              type="number"
              placeholder="请输入商品价格"
              addonAfter="元"
            ></Input>
          </Item>
          <Item
            name="productClass"
            label="商品类别"
            rules={[{ required: true, message: "必须选择商品类别!" }]}
            initialValue={categoryIds}
          >
            <Cascader
              placeholder="请选择"
              options={this.state.options}
              loadData={this.loadData}
              onChange={this.onChange}
              changeOnSelect
            ></Cascader>
          </Item>
          <Item
            name="productImgs"
            label="商品图片"
            initialValue={name}
            rules={[{ required: true, message: "必须输入商品名称!" }]}
          >
          <PicturesWall ref={this.pw} imgs/></Item>
          {/* 输入的是数值,指定type */}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

/* 子组件调用父组件的方法:将父组件的方法以函数属性的形式传递给子组件,子组件就可以调用
父组件调用子组件的方法 :在父组件忠通过ref得到子组件标签对象(组件对象),调用其方法*/