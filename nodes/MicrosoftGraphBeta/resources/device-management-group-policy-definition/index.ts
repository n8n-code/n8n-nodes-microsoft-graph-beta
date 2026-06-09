import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementGroupPolicyDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Group Policy Definitions",
					"value": "Device Management List Group Policy Definitions",
					"action": "Get groupPolicyDefinitions from deviceManagement",
					"description": "The available group policy definitions for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions"
						}
					}
				},
				{
					"name": "Device Management Create Group Policy Definitions",
					"value": "Device Management Create Group Policy Definitions",
					"action": "Create new navigation property to groupPolicyDefinitions for deviceManagement",
					"description": "Create new navigation property to groupPolicyDefinitions for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyDefinitions"
						}
					}
				},
				{
					"name": "Device Management Delete Group Policy Definitions",
					"value": "Device Management Delete Group Policy Definitions",
					"action": "Delete navigation property groupPolicyDefinitions for deviceManagement",
					"description": "Delete navigation property groupPolicyDefinitions for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Group Policy Definitions",
					"value": "Device Management Get Group Policy Definitions",
					"action": "Get groupPolicyDefinitions from deviceManagement",
					"description": "The available group policy definitions for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Group Policy Definitions",
					"value": "Device Management Update Group Policy Definitions",
					"action": "Update the navigation property groupPolicyDefinitions in deviceManagement",
					"description": "Update the navigation property groupPolicyDefinitions in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Get Category",
					"value": "Device Management Group Policy Definitions Get Category",
					"action": "Get category from deviceManagement",
					"description": "The group policy category associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/category"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Get Definition File",
					"value": "Device Management Group Policy Definitions Get Definition File",
					"action": "Get definitionFile from deviceManagement",
					"description": "The group policy file associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/definitionFile"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Delete Next Version Definition",
					"value": "Device Management Group Policy Definitions Delete Next Version Definition",
					"action": "Delete navigation property nextVersionDefinition for deviceManagement",
					"description": "Delete navigation property nextVersionDefinition for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Get Next Version Definition",
					"value": "Device Management Group Policy Definitions Get Next Version Definition",
					"action": "Get nextVersionDefinition from deviceManagement",
					"description": "Definition of the next version of this definition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Update Next Version Definition",
					"value": "Device Management Group Policy Definitions Update Next Version Definition",
					"action": "Update the navigation property nextVersionDefinition in deviceManagement",
					"description": "Update the navigation property nextVersionDefinition in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Get Category",
					"value": "Device Management Group Policy Definitions Next Version Definition Get Category",
					"action": "Get category from deviceManagement",
					"description": "The group policy category associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/category"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Get Definition File",
					"value": "Device Management Group Policy Definitions Next Version Definition Get Definition File",
					"action": "Get definitionFile from deviceManagement",
					"description": "The group policy file associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/definitionFile"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition List Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition List Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Create Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Create Presentations",
					"action": "Create new navigation property to presentations for deviceManagement",
					"description": "Create new navigation property to presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Delete Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Delete Presentations",
					"action": "Delete navigation property presentations for deviceManagement",
					"description": "Delete navigation property presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Get Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Get Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Update Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Update Presentations",
					"action": "Update the navigation property presentations in deviceManagement",
					"description": "Update the navigation property presentations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Presentations Get Definition",
					"value": "Device Management Group Policy Definitions Next Version Definition Presentations Get Definition",
					"action": "Get definition from deviceManagement",
					"description": "The group policy definition associated with the presentation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}/definition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Delete Previous Version Definition",
					"value": "Device Management Group Policy Definitions Next Version Definition Delete Previous Version Definition",
					"action": "Delete navigation property previousVersionDefinition for deviceManagement",
					"description": "Delete navigation property previousVersionDefinition for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Get Previous Version Definition",
					"value": "Device Management Group Policy Definitions Next Version Definition Get Previous Version Definition",
					"action": "Get previousVersionDefinition from deviceManagement",
					"description": "Definition of the previous version of this definition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Update Previous Version Definition",
					"value": "Device Management Group Policy Definitions Next Version Definition Update Previous Version Definition",
					"action": "Update the navigation property previousVersionDefinition in deviceManagement",
					"description": "Update the navigation property previousVersionDefinition in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Category",
					"value": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Category",
					"action": "Get category from deviceManagement",
					"description": "The group policy category associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition/category"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Definition File",
					"value": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Definition File",
					"action": "Get definitionFile from deviceManagement",
					"description": "The group policy file associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition/definitionFile"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Create Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Create Presentations",
					"action": "Create new navigation property to presentations for deviceManagement",
					"description": "Create new navigation property to presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Delete Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Delete Presentations",
					"action": "Delete navigation property presentations for deviceManagement",
					"description": "Delete navigation property presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Update Presentations",
					"value": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Update Presentations",
					"action": "Update the navigation property presentations in deviceManagement",
					"description": "Update the navigation property presentations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Presentations Get Definition",
					"value": "Device Management Group Policy Definitions Next Version Definition Previous Version Definition Presentations Get Definition",
					"action": "Get definition from deviceManagement",
					"description": "The group policy definition associated with the presentation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/nextVersionDefinition/previousVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}/definition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions List Presentations",
					"value": "Device Management Group Policy Definitions List Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Create Presentations",
					"value": "Device Management Group Policy Definitions Create Presentations",
					"action": "Create new navigation property to presentations for deviceManagement",
					"description": "Create new navigation property to presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Delete Presentations",
					"value": "Device Management Group Policy Definitions Delete Presentations",
					"action": "Delete navigation property presentations for deviceManagement",
					"description": "Delete navigation property presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Get Presentations",
					"value": "Device Management Group Policy Definitions Get Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Update Presentations",
					"value": "Device Management Group Policy Definitions Update Presentations",
					"action": "Update the navigation property presentations in deviceManagement",
					"description": "Update the navigation property presentations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Presentations Get Definition",
					"value": "Device Management Group Policy Definitions Presentations Get Definition",
					"action": "Get definition from deviceManagement",
					"description": "The group policy definition associated with the presentation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}/definition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Delete Previous Version Definition",
					"value": "Device Management Group Policy Definitions Delete Previous Version Definition",
					"action": "Delete navigation property previousVersionDefinition for deviceManagement",
					"description": "Delete navigation property previousVersionDefinition for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Get Previous Version Definition",
					"value": "Device Management Group Policy Definitions Get Previous Version Definition",
					"action": "Get previousVersionDefinition from deviceManagement",
					"description": "Definition of the previous version of this definition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Update Previous Version Definition",
					"value": "Device Management Group Policy Definitions Update Previous Version Definition",
					"action": "Update the navigation property previousVersionDefinition in deviceManagement",
					"description": "Update the navigation property previousVersionDefinition in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Get Category",
					"value": "Device Management Group Policy Definitions Previous Version Definition Get Category",
					"action": "Get category from deviceManagement",
					"description": "The group policy category associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/category"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Get Definition File",
					"value": "Device Management Group Policy Definitions Previous Version Definition Get Definition File",
					"action": "Get definitionFile from deviceManagement",
					"description": "The group policy file associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/definitionFile"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Delete Next Version Definition",
					"value": "Device Management Group Policy Definitions Previous Version Definition Delete Next Version Definition",
					"action": "Delete navigation property nextVersionDefinition for deviceManagement",
					"description": "Delete navigation property nextVersionDefinition for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Get Next Version Definition",
					"value": "Device Management Group Policy Definitions Previous Version Definition Get Next Version Definition",
					"action": "Get nextVersionDefinition from deviceManagement",
					"description": "Definition of the next version of this definition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Update Next Version Definition",
					"value": "Device Management Group Policy Definitions Previous Version Definition Update Next Version Definition",
					"action": "Update the navigation property nextVersionDefinition in deviceManagement",
					"description": "Update the navigation property nextVersionDefinition in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Category",
					"value": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Category",
					"action": "Get category from deviceManagement",
					"description": "The group policy category associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition/category"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Definition File",
					"value": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Definition File",
					"action": "Get definitionFile from deviceManagement",
					"description": "The group policy file associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition/definitionFile"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Create Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Create Presentations",
					"action": "Create new navigation property to presentations for deviceManagement",
					"description": "Create new navigation property to presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Delete Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Delete Presentations",
					"action": "Delete navigation property presentations for deviceManagement",
					"description": "Delete navigation property presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Update Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Update Presentations",
					"action": "Update the navigation property presentations in deviceManagement",
					"description": "Update the navigation property presentations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Presentations Get Definition",
					"value": "Device Management Group Policy Definitions Previous Version Definition Next Version Definition Presentations Get Definition",
					"action": "Get definition from deviceManagement",
					"description": "The group policy definition associated with the presentation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/nextVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}/definition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition List Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition List Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Create Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Create Presentations",
					"action": "Create new navigation property to presentations for deviceManagement",
					"description": "Create new navigation property to presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/presentations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Delete Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Delete Presentations",
					"action": "Delete navigation property presentations for deviceManagement",
					"description": "Delete navigation property presentations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Get Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Get Presentations",
					"action": "Get presentations from deviceManagement",
					"description": "The group policy presentations associated with the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Update Presentations",
					"value": "Device Management Group Policy Definitions Previous Version Definition Update Presentations",
					"action": "Update the navigation property presentations in deviceManagement",
					"description": "Update the navigation property presentations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definitions Previous Version Definition Presentations Get Definition",
					"value": "Device Management Group Policy Definitions Previous Version Definition Presentations Get Definition",
					"action": "Get definition from deviceManagement",
					"description": "The group policy definition associated with the presentation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitions/{{$parameter[\"groupPolicyDefinition-id\"]}}/previousVersionDefinition/presentations/{{$parameter[\"groupPolicyPresentation-id\"]}}/definition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management List Group Policy Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Create Group Policy Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Create Group Policy Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Delete Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Delete Group Policy Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Get Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Get Group Policy Definitions"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Get Group Policy Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Update Group Policy Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Update Group Policy Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/definitionFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Definition File"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Delete Next Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Delete Next Version Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Next Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Next Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Next Version Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Update Next Version Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Update Next Version Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/definitionFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Definition File"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition List Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/presentations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Delete Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Delete Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/presentations/{groupPolicyPresentation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/presentations/{groupPolicyPresentation-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Presentations Get Definition"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Delete Previous Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Delete Previous Version Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Previous Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Previous Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Get Previous Version Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Update Previous Version Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Update Previous Version Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/definitionFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Definition File"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition List Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/presentations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Delete Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Delete Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Get Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/presentations/{groupPolicyPresentation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition/presentations/{groupPolicyPresentation-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Next Version Definition Previous Version Definition Presentations Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions List Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Delete Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Delete Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Presentations Get Definition"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Delete Previous Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Delete Previous Version Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Previous Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Previous Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Get Previous Version Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Update Previous Version Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Update Previous Version Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/definitionFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Definition File"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Delete Next Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Delete Next Version Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Next Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Next Version Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Next Version Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Update Next Version Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Update Next Version Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Category"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/definitionFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Definition File"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Definition File"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition List Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Delete Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Delete Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Get Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Next Version Definition Presentations Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition List Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/presentations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/presentations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Create Presentations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Delete Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Delete Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Presentations"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Get Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/presentations/{groupPolicyPresentation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/presentations/{groupPolicyPresentation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Update Presentations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/presentations/{groupPolicyPresentation-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Presentations Get Definition"
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
						"Device Management Group Policy Definition"
					],
					"operation": [
						"Device Management Group Policy Definitions Previous Version Definition Presentations Get Definition"
					]
				}
			}
		},
];
