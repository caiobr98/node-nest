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

    it('Get name method', () => {
        expect(sut.props.name).toBeDefined();
        expect(sut.props.name).toEqual(props.name);
        expect(typeof sut.props.name).toBe('string');
    });

    it('Get email method', () => {
        expect(sut.props.email).toBeDefined();
        expect(sut.props.email).toEqual(props.email);
        expect(typeof sut.props.email).toBe('string');
    });

    it('Get password method', () => {
        expect(sut.props.password).toBeDefined();
        expect(sut.props.password).toEqual(props.password);
        expect(typeof sut.props.password).toBe('string');
    });

    it('Get createdAt method', () => {
        expect(sut.props.createdAt).toBeDefined();
        expect(sut.props.createdAt).toBeInstanceOf(Date);
    });
});
