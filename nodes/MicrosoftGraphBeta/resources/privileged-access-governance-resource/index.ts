import type { INodeProperties } from 'n8n-workflow';

export const privilegedAccessGovernanceResourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Access List Resources",
					"value": "Privileged Access List Resources",
					"action": "List governanceResources",
					"description": "Retrieve a collection of governanceResource that the requestor has access to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Privileged Access Create Resources",
					"value": "Privileged Access Create Resources",
					"action": "Create new navigation property to resources for privilegedAccess",
					"description": "Create new navigation property to resources for privilegedAccess",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Privileged Access Delete Resources",
					"value": "Privileged Access Delete Resources",
					"action": "Delete navigation property resources for privilegedAccess",
					"description": "Delete navigation property resources for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Get Resources",
					"value": "Privileged Access Get Resources",
					"action": "Get resources from privilegedAccess",
					"description": "A collection of resources for the provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Update Resources",
					"value": "Privileged Access Update Resources",
					"action": "Update the navigation property resources in privilegedAccess",
					"description": "Update the navigation property resources in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Get Parent",
					"value": "Privileged Access Resources Get Parent",
					"action": "Get parent from privilegedAccess",
					"description": "Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/parent"
						}
					}
				},
				{
					"name": "Privileged Access Resources List Role Assignment Requests",
					"value": "Privileged Access Resources List Role Assignment Requests",
					"action": "Get roleAssignmentRequests from privilegedAccess",
					"description": "The collection of role assignment requests for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests"
						}
					}
				},
				{
					"name": "Privileged Access Resources Create Role Assignment Requests",
					"value": "Privileged Access Resources Create Role Assignment Requests",
					"action": "Create new navigation property to roleAssignmentRequests for privilegedAccess",
					"description": "Create new navigation property to roleAssignmentRequests for privilegedAccess",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests"
						}
					}
				},
				{
					"name": "Privileged Access Resources Delete Role Assignment Requests",
					"value": "Privileged Access Resources Delete Role Assignment Requests",
					"action": "Delete navigation property roleAssignmentRequests for privilegedAccess",
					"description": "Delete navigation property roleAssignmentRequests for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Get Role Assignment Requests",
					"value": "Privileged Access Resources Get Role Assignment Requests",
					"action": "Get roleAssignmentRequests from privilegedAccess",
					"description": "The collection of role assignment requests for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Update Role Assignment Requests",
					"value": "Privileged Access Resources Update Role Assignment Requests",
					"action": "Update the navigation property roleAssignmentRequests in privilegedAccess",
					"description": "Update the navigation property roleAssignmentRequests in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Get Resource",
					"value": "Privileged Access Resources Role Assignment Requests Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The resource that the request aims to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Delete Role Definition",
					"value": "Privileged Access Resources Role Assignment Requests Delete Role Definition",
					"action": "Delete navigation property roleDefinition for privilegedAccess",
					"description": "Delete navigation property roleDefinition for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Get Role Definition",
					"value": "Privileged Access Resources Role Assignment Requests Get Role Definition",
					"action": "Get roleDefinition from privilegedAccess",
					"description": "Read-only. The role definition that the request aims to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Update Role Definition",
					"value": "Privileged Access Resources Role Assignment Requests Update Role Definition",
					"action": "Update the navigation property roleDefinition in privilegedAccess",
					"description": "Update the navigation property roleDefinition in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Role Definition Get Resource",
					"value": "Privileged Access Resources Role Assignment Requests Role Definition Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Role Definition Get Role Setting",
					"value": "Privileged Access Resources Role Assignment Requests Role Definition Get Role Setting",
					"action": "Get roleSetting from privilegedAccess",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition/roleSetting"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Delete Subject",
					"value": "Privileged Access Resources Role Assignment Requests Delete Subject",
					"action": "Delete navigation property subject for privilegedAccess",
					"description": "Delete navigation property subject for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Get Subject",
					"value": "Privileged Access Resources Role Assignment Requests Get Subject",
					"action": "Get subject from privilegedAccess",
					"description": "Read-only. The user/group principal.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignment Requests Update Subject",
					"value": "Privileged Access Resources Role Assignment Requests Update Subject",
					"action": "Update the navigation property subject in privilegedAccess",
					"description": "Update the navigation property subject in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Resources List Role Assignments",
					"value": "Privileged Access Resources List Role Assignments",
					"action": "Get roleAssignments from privilegedAccess",
					"description": "The collection of role assignments for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments"
						}
					}
				},
				{
					"name": "Privileged Access Resources Create Role Assignments",
					"value": "Privileged Access Resources Create Role Assignments",
					"action": "Create new navigation property to roleAssignments for privilegedAccess",
					"description": "Create new navigation property to roleAssignments for privilegedAccess",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments"
						}
					}
				},
				{
					"name": "Privileged Access Resources Delete Role Assignments",
					"value": "Privileged Access Resources Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for privilegedAccess",
					"description": "Delete navigation property roleAssignments for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Get Role Assignments",
					"value": "Privileged Access Resources Get Role Assignments",
					"action": "Get roleAssignments from privilegedAccess",
					"description": "The collection of role assignments for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Update Role Assignments",
					"value": "Privileged Access Resources Update Role Assignments",
					"action": "Update the navigation property roleAssignments in privilegedAccess",
					"description": "Update the navigation property roleAssignments in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Get Linked Eligible Role Assignment",
					"value": "Privileged Access Resources Role Assignments Get Linked Eligible Role Assignment",
					"action": "Get linkedEligibleRoleAssignment from privilegedAccess",
					"description": "Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/linkedEligibleRoleAssignment"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Get Resource",
					"value": "Privileged Access Resources Role Assignments Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The resource associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Delete Role Definition",
					"value": "Privileged Access Resources Role Assignments Delete Role Definition",
					"action": "Delete navigation property roleDefinition for privilegedAccess",
					"description": "Delete navigation property roleDefinition for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Get Role Definition",
					"value": "Privileged Access Resources Role Assignments Get Role Definition",
					"action": "Get roleDefinition from privilegedAccess",
					"description": "Read-only. The role definition associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Update Role Definition",
					"value": "Privileged Access Resources Role Assignments Update Role Definition",
					"action": "Update the navigation property roleDefinition in privilegedAccess",
					"description": "Update the navigation property roleDefinition in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Role Definition Get Resource",
					"value": "Privileged Access Resources Role Assignments Role Definition Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Role Definition Get Role Setting",
					"value": "Privileged Access Resources Role Assignments Role Definition Get Role Setting",
					"action": "Get roleSetting from privilegedAccess",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition/roleSetting"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Delete Subject",
					"value": "Privileged Access Resources Role Assignments Delete Subject",
					"action": "Delete navigation property subject for privilegedAccess",
					"description": "Delete navigation property subject for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Get Subject",
					"value": "Privileged Access Resources Role Assignments Get Subject",
					"action": "Get subject from privilegedAccess",
					"description": "Read-only. The subject associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Assignments Update Subject",
					"value": "Privileged Access Resources Role Assignments Update Subject",
					"action": "Update the navigation property subject in privilegedAccess",
					"description": "Update the navigation property subject in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Resources List Role Definitions",
					"value": "Privileged Access Resources List Role Definitions",
					"action": "Get roleDefinitions from privilegedAccess",
					"description": "The collection of role defintions for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions"
						}
					}
				},
				{
					"name": "Privileged Access Resources Create Role Definitions",
					"value": "Privileged Access Resources Create Role Definitions",
					"action": "Create new navigation property to roleDefinitions for privilegedAccess",
					"description": "Create new navigation property to roleDefinitions for privilegedAccess",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions"
						}
					}
				},
				{
					"name": "Privileged Access Resources Delete Role Definitions",
					"value": "Privileged Access Resources Delete Role Definitions",
					"action": "Delete navigation property roleDefinitions for privilegedAccess",
					"description": "Delete navigation property roleDefinitions for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Get Role Definitions",
					"value": "Privileged Access Resources Get Role Definitions",
					"action": "Get roleDefinitions from privilegedAccess",
					"description": "The collection of role defintions for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Update Role Definitions",
					"value": "Privileged Access Resources Update Role Definitions",
					"action": "Update the navigation property roleDefinitions in privilegedAccess",
					"description": "Update the navigation property roleDefinitions in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Definitions Get Resource",
					"value": "Privileged Access Resources Role Definitions Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Definitions Get Role Setting",
					"value": "Privileged Access Resources Role Definitions Get Role Setting",
					"action": "Get roleSetting from privilegedAccess",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}/roleSetting"
						}
					}
				},
				{
					"name": "Privileged Access Resources List Role Settings",
					"value": "Privileged Access Resources List Role Settings",
					"action": "Get roleSettings from privilegedAccess",
					"description": "The collection of role settings for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings"
						}
					}
				},
				{
					"name": "Privileged Access Resources Create Role Settings",
					"value": "Privileged Access Resources Create Role Settings",
					"action": "Create new navigation property to roleSettings for privilegedAccess",
					"description": "Create new navigation property to roleSettings for privilegedAccess",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings"
						}
					}
				},
				{
					"name": "Privileged Access Resources Delete Role Settings",
					"value": "Privileged Access Resources Delete Role Settings",
					"action": "Delete navigation property roleSettings for privilegedAccess",
					"description": "Delete navigation property roleSettings for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Get Role Settings",
					"value": "Privileged Access Resources Get Role Settings",
					"action": "Get roleSettings from privilegedAccess",
					"description": "The collection of role settings for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Update Role Settings",
					"value": "Privileged Access Resources Update Role Settings",
					"action": "Update the navigation property roleSettings in privilegedAccess",
					"description": "Update the navigation property roleSettings in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Settings Get Resource",
					"value": "Privileged Access Resources Role Settings Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for this role setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Settings Delete Role Definition",
					"value": "Privileged Access Resources Role Settings Delete Role Definition",
					"action": "Delete navigation property roleDefinition for privilegedAccess",
					"description": "Delete navigation property roleDefinition for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Settings Get Role Definition",
					"value": "Privileged Access Resources Role Settings Get Role Definition",
					"action": "Get roleDefinition from privilegedAccess",
					"description": "Read-only. The role definition that is enforced with this role setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Settings Update Role Definition",
					"value": "Privileged Access Resources Role Settings Update Role Definition",
					"action": "Update the navigation property roleDefinition in privilegedAccess",
					"description": "Update the navigation property roleDefinition in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Settings Role Definition Get Resource",
					"value": "Privileged Access Resources Role Settings Role Definition Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Privileged Access Resources Role Settings Role Definition Get Role Setting",
					"value": "Privileged Access Resources Role Settings Role Definition Get Role Setting",
					"action": "Get roleSetting from privilegedAccess",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition/roleSetting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Get Resources"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Get Resources"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Update Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Parent"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Parent"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Parent"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Create Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Create Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Delete Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Delete Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Update Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Update Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Subject"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Subject"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Get Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Update Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignment Requests Update Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Linked Eligible Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Linked Eligible Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Linked Eligible Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Subject"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Subject"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Get Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Update Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Assignments Update Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Definitions Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Definitions Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Definitions Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Definitions Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Definitions Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Definitions Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Create Role Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Create Role Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Delete Role Settings"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Delete Role Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Settings"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Get Role Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Update Role Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Update Role Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Get Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Resource"
					],
					"operation": [
						"Privileged Access Resources Role Settings Role Definition Get Role Setting"
					]
				}
			}
		},
];
