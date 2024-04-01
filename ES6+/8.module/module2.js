/*
    import from:
    - 타 모듈에서 export 한 대상을 로드
    - 타 모듈에서 export 내보내면 {   }를 사용하여 import 해야 함,
    이름이 같아야 함
    - 타 모듈에서 export default로 내보내면 {  }없이 import 함, 내보낸 이름과 받아오는 이름이 달라도 됨
*/
import { exportVariable, exportFunction, exportClass } from './module.mjs';
console.log(exportVariable); // export 변수

import defaultVariable from './module.mjs';
console.log(defaultVariable); //export default 변수

/*
    - as 키워드로 export로 내보낸 대상에 이름을 변경하여 사용할 수 있음
*/
//내보낸 emportVariable 이름을 as로 변경
import { exportVariable as ev  } from './module.mjs';
console.log(ev); // export 변수

/*
    - 타 모듈의 모든 대상을 한번에 받을 때는 * 키워드 사용해서 가져올 수 있음
    - 표현할 이름이 필요하므로, as 키워드가 필요함
*/
import * as  md from './module.mjs';
console.log(md.exportVariable); // export 변수
console.log(md.default); //export default 변수

/*
    - 모듈의 이름이 index 이면 해당 폴더명으로 import 가능
*/
import {  indexExport } from './folder/index.mjs';
console.log(indexExport); // index
