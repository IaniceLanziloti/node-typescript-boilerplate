import assert from 'assert';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';

import FakeBalancesRepository from '../repositories/implementations/fakes/FakeBalancesRepository';

import CreateBalancesService from './CreateBalancesService';

let fakeBalancesRepository: FakeBalancesRepository;
let createBalancesService: CreateBalancesService;

describe('Create balance service', () => {
  beforeEach(() => {
    fakeBalancesRepository = new FakeBalancesRepository();

    createBalancesService = new CreateBalancesService(fakeBalancesRepository);
  });

  it('should be able to create a balance', async () => {
    const createSpy = sinon.spy(fakeBalancesRepository, 'create');

    const balance = await createBalancesService.execute({
      type: 1,
      amount: 350,
    });

    expect(balance).to.have.property('id');
    expect(balance?.type).to.eq(1);
    expect(balance?.amount).to.eq(350);

    assert(createSpy.withArgs({ amount: 350, type: 1 }).calledOnceWith);
  });
});
