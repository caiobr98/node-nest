import { before } from 'node:test';
import { UserEntity, UserProps } from '../../user.entity';

describe('User Entity', () => {
    let props: UserProps;
    let sut: UserEntity;
    before(() => {
        props = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        };
        sut = new UserEntity(props);
    });
    it('Constructor method', () => {
        expect(sut.props.name).toEqual(props.name);
        expect(sut.props.email).toEqual(props.email);
        expect(sut.props.password).toEqual(props.password);
        expect(sut.props.createdAt).toBeInstanceOf(Date);
    });
});
