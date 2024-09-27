const base_url = 'https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/'
const Icon = ({type}) => {
    return (
        <img
          src={`${base_url + type}.svg`}
          alt="icon"
          style={{
            width: 20,
            height: 20,
          }}
          />
      )
}

export default Icon