package com.app.repository;

import com.app.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRepository extends CrudRepository<Role,Long> {

    List<Role> findRoleEntitiesByRoleEnumIn(List<String> roleNames);
}
