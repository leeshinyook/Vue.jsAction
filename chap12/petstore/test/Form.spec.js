import { mount } from '@vue/test-utils';
import Form from '../src/components/Form.vue';

describe('Form.vue', () => {
	it('버튼을 눌렀을 때 madeOrder가 true가 되는지 확인', () => {
		const wrapper = mount(Form); // shallow버전의 컴포넌트에 래퍼를 할당합니다.
		wrapper.find('button').trigger('click'); // 버튼을 찾아 트리거합니다.
		expect(wrapper.vm.madeOrder).toBe(true);
	});
});
