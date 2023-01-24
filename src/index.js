/**
 * 할 일
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} completed - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * 할 일 생성(내용없이 생성 불가)
 * @param {string} content - 생성할 내용
 * @param {string} category - 생성할 카테고리
 * @param {string[]} [tags] - 생성할 태그들
 */
const Create = (content, category, tags) => {};

/**
 * 할 일 조회
 * @param {number} id - 조회할 아이디
 */
const Read = (id) => {};

/**
 * 할 일 수정
 * @param {string} content - 수정할 내용
 * @param {boolean} completed - 완료여부 수정
 * @param {string} category - 수정할 카테고리
 * @param {string[]} [tags] - 수정할 태그
 */
const Update = (content, completed, category, tags) => {};

/**
 * 특정 할 일의 태그 수정
 * @param {number} id - 특정 할 일의 아이디
 * @param {string} tag - 특정 할 일의 태그
 * @param {string} changeTag - 태그 수정
 */
const TagUpdate = (id, tag, changeTag) => {};

/**
 * 모든 할 일을 삭제
 * @return {array}
 */
const DeleteAll = () => {};

/**
 * id를 긱반으로 특정 할 일을 삭제
 * @param {number} id
 */
const Delete = (id) => {};

/**
 * 특정 할 일의 특정 태그를 삭제
 * @param {number} id
 * @param {string} tag
 */
const DeleteTag = (id, tag) => {};

/**
 * 특정 할 일의 모든 태그를 삭제
 * @param {number} id
 * @param {string[]} tags
 */
const DeleteAllTag = (id, tags) => {};