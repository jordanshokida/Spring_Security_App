package com.app.repository;

import com.app.entity.Role;
import com.app.entity.RoleEnum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleRepository extends CrudRepository<Role,Long> {

    List<Role> findRoleEntitiesByRoleEnumIn(List<String> roleNames);

    Optional<Role> findByRoleEnum(RoleEnum roleEnum);
}
