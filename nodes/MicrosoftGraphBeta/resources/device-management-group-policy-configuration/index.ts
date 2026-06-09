import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementGroupPolicyConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Group Policy Configurations",
					"value": "Device Management List Group Policy Configurations",
					"action": "Get groupPolicyConfigurations from deviceManagement",
					"description": "The group policy configurations created by this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations"
						}
					}
				},
				{
					"name": "Device Management Create Group Policy Configurations",
					"value": "Device Management Create Group Policy Configurations",
					"action": "Create new navigation property to groupPolicyConfigurations for deviceManagement",
					"description": "Create new navigation property to groupPolicyConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyConfigurations"
						}
					}
				},
				{
					"name": "Device Management Delete Group Policy Configurations",
					"value": "Device Management Delete Group Policy Configurations",
					"action": "Delete navigation property groupPolicyConfigurations for deviceManagement",
					"description": "Delete navigation property groupPolicyConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Group Policy Configurations",
					"value": "Device Management Get Group Policy Configurations",
					"action": "Get groupPolicyConfigurations from deviceManagement",
					"description": "The group policy configurations created by this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Group Policy Configurations",
					"value": "Device Management Update Group Policy Configurations",
					"action": "Update the navigation property groupPolicyConfigurations in deviceManagement",
					"description": "Update the navigation property groupPolicyConfigurations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations List Assignments",
					"value": "Device Management Group Policy Configurations List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Create Assignments",
					"value": "Device Management Group Policy Configurations Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Delete Assignments",
					"value": "Device Management Group Policy Configurations Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/assignments/{{$parameter[\"groupPolicyConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Get Assignments",
					"value": "Device Management Group Policy Configurations Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/assignments/{{$parameter[\"groupPolicyConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Update Assignments",
					"value": "Device Management Group Policy Configurations Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/assignments/{{$parameter[\"groupPolicyConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations List Definition Values",
					"value": "Device Management Group Policy Configurations List Definition Values",
					"action": "Get definitionValues from deviceManagement",
					"description": "The list of enabled or disabled group policy definition values for the configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Create Definition Values",
					"value": "Device Management Group Policy Configurations Create Definition Values",
					"action": "Create new navigation property to definitionValues for deviceManagement",
					"description": "Create new navigation property to definitionValues for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Delete Definition Values",
					"value": "Device Management Group Policy Configurations Delete Definition Values",
					"action": "Delete navigation property definitionValues for deviceManagement",
					"description": "Delete navigation property definitionValues for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Get Definition Values",
					"value": "Device Management Group Policy Configurations Get Definition Values",
					"action": "Get definitionValues from deviceManagement",
					"description": "The list of enabled or disabled group policy definition values for the configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Update Definition Values",
					"value": "Device Management Group Policy Configurations Update Definition Values",
					"action": "Update the navigation property definitionValues in deviceManagement",
					"description": "Update the navigation property definitionValues in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Definition Values Get Definition",
					"value": "Device Management Group Policy Configurations Definition Values Get Definition",
					"action": "Get definition from deviceManagement",
					"description": "The associated group policy definition with the value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}/definition"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Definition Values List Presentation Values",
					"value": "Device Management Group Policy Configurations Definition Values List Presentation Values",
					"action": "Get presentationValues from deviceManagement",
					"description": "The associated group policy presentation values with the definition value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}/presentationValues"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Definition Values Create Presentation Values",
					"value": "Device Management Group Policy Configurations Definition Values Create Presentation Values",
					"action": "Create new navigation property to presentationValues for deviceManagement",
					"description": "Create new navigation property to presentationValues for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}/presentationValues"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Definition Values Delete Presentation Values",
					"value": "Device Management Group Policy Configurations Definition Values Delete Presentation Values",
					"action": "Delete navigation property presentationValues for deviceManagement",
					"description": "Delete navigation property presentationValues for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}/presentationValues/{{$parameter[\"groupPolicyPresentationValue-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Definition Values Get Presentation Values",
					"value": "Device Management Group Policy Configurations Definition Values Get Presentation Values",
					"action": "Get presentationValues from deviceManagement",
					"description": "The associated group policy presentation values with the definition value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}/presentationValues/{{$parameter[\"groupPolicyPresentationValue-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Definition Values Update Presentation Values",
					"value": "Device Management Group Policy Configurations Definition Values Update Presentation Values",
					"action": "Update the navigation property presentationValues in deviceManagement",
					"description": "Update the navigation property presentationValues in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}/presentationValues/{{$parameter[\"groupPolicyPresentationValue-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Definition Values Presentation Values Get Definition Value",
					"value": "Device Management Group Policy Configurations Definition Values Presentation Values Get Definition Value",
					"action": "Get definitionValue from deviceManagement",
					"description": "The group policy definition value associated with the presentation value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}/presentationValues/{{$parameter[\"groupPolicyPresentationValue-id\"]}}/definitionValue"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Definition Values Presentation Values Get Presentation",
					"value": "Device Management Group Policy Configurations Definition Values Presentation Values Get Presentation",
					"action": "Get presentation from deviceManagement",
					"description": "The group policy presentation associated with the presentation value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/definitionValues/{{$parameter[\"groupPolicyDefinitionValue-id\"]}}/presentationValues/{{$parameter[\"groupPolicyPresentationValue-id\"]}}/presentation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management List Group Policy Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Create Group Policy Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Create Group Policy Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Delete Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Delete Group Policy Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Get Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Get Group Policy Configurations"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Get Group Policy Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Update Group Policy Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Update Group Policy Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Delete Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Get Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Get Assignments"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations List Definition Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Create Definition Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Create Definition Values"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Delete Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Delete Definition Values"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Get Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Get Definition Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Get Definition Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Update Definition Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Update Definition Values"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Get Definition"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Get Definition"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values List Presentation Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Create Presentation Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Create Presentation Values"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Delete Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Delete Presentation Values"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Get Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Get Presentation Values"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Get Presentation Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Update Presentation Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Update Presentation Values"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/definitionValue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Presentation Values Get Definition Value"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Presentation Values Get Definition Value"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Presentation Values Get Definition Value"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/presentation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Presentation Values Get Presentation"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Presentation Values Get Presentation"
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
						"Device Management Group Policy Configuration"
					],
					"operation": [
						"Device Management Group Policy Configurations Definition Values Presentation Values Get Presentation"
					]
				}
			}
		},
];
