import { Modal } from 'antd';

export let modalError = (msg) => {
  Modal.error({
    title: "提示",
    content: msg
  });
};