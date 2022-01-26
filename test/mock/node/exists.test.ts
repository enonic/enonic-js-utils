import {
	deepStrictEqual
} from 'assert';

import {JavaBridge} from '../../../src/mock/JavaBridge';


function hasMethod(obj :unknown, name :string) {
	// TODO check if obj is Object?
	return typeof obj[name] === 'function';
}


describe('mock', () => {
	describe('JavaBridge', () => {
		const javaBridge = new JavaBridge({
			app: {
				config: {},
				name: 'com.enonic.app.test',
				version: '0.0.1-SNAPSHOT'
			}
		});
		javaBridge.repo.create({
			id: 'myRepoId'
		});
		describe('connect()', () => {
			describe('Connection', () => {
				const connection = javaBridge.connect({
					branch: 'master',
					repoId: 'myRepoId'
				});
				it('returns an object which has a exists method', () => {
					deepStrictEqual(
						true,
						hasMethod(connection, 'exists')
					);
				}); // it
				const createRes = connection.create({});
				//javaBridge.log.info('createRes:%s', createRes);
				describe('exists()', () => {
					it('returns an empty array for non existant nodes', () => {
						deepStrictEqual(
							[],
							connection.exists('')
						); // deepStrictEqual
					}); // it
					it('returns an array for existant nodes', () => {
						deepStrictEqual(
							[createRes._id],
							connection.exists(createRes._id)
						); // deepStrictEqual
					}); // it
					it('filters away non existant nodes', () => {
						deepStrictEqual(
							[createRes._id],
							connection.exists([
								'',
								createRes._id,
								'whatever'
							])
						); // deepStrictEqual
					}); // it
				}); // describe exists()
			}); // describe Connection
		}); // describe connect()
	}); // describe JavaBridge
}); // describe mock
