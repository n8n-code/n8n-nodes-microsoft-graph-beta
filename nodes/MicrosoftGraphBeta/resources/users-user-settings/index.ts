import type { INodeProperties } from 'n8n-workflow';

export const usersUserSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Settings",
					"value": "Users Delete Settings",
					"action": "Delete navigation property settings for users",
					"description": "Delete navigation property settings for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Users Get Settings",
					"value": "Users Get Settings",
					"action": "Get settings from users",
					"description": "Get settings from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Users Update Settings",
					"value": "Users Update Settings",
					"action": "Update the navigation property settings in users",
					"description": "Update the navigation property settings in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Users Settings Delete Contact Merge Suggestions",
					"value": "Users Settings Delete Contact Merge Suggestions",
					"action": "Delete navigation property contactMergeSuggestions for users",
					"description": "Delete navigation property contactMergeSuggestions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/contactMergeSuggestions"
						}
					}
				},
				{
					"name": "Users Settings Get Contact Merge Suggestions",
					"value": "Users Settings Get Contact Merge Suggestions",
					"action": "Get contactMergeSuggestions",
					"description": "Read the properties and relationships of a contactMergeSuggestions object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/contactMergeSuggestions"
						}
					}
				},
				{
					"name": "Users Settings Update Contact Merge Suggestions",
					"value": "Users Settings Update Contact Merge Suggestions",
					"action": "Update contactMergeSuggestions",
					"description": "Update the properties of a contactMergeSuggestions object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/contactMergeSuggestions"
						}
					}
				},
				{
					"name": "Users Settings Delete Item Insights",
					"value": "Users Settings Delete Item Insights",
					"action": "Delete navigation property itemInsights for users",
					"description": "Delete navigation property itemInsights for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/itemInsights"
						}
					}
				},
				{
					"name": "Users Settings Get Item Insights",
					"value": "Users Settings Get Item Insights",
					"action": "Get userInsightsSettings",
					"description": "Get the user-customizable privacy settings for itemInsights and meeting hours insights.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/itemInsights"
						}
					}
				},
				{
					"name": "Users Settings Update Item Insights",
					"value": "Users Settings Update Item Insights",
					"action": "Update userInsightsSettings",
					"description": "Update the privacy settings for itemInsights and meeting hours insights of a user.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/itemInsights"
						}
					}
				},
				{
					"name": "Users Settings Delete Regional And Language Settings",
					"value": "Users Settings Delete Regional And Language Settings",
					"action": "Delete navigation property regionalAndLanguageSettings for users",
					"description": "Delete navigation property regionalAndLanguageSettings for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/regionalAndLanguageSettings"
						}
					}
				},
				{
					"name": "Users Settings Get Regional And Language Settings",
					"value": "Users Settings Get Regional And Language Settings",
					"action": "Get regionalAndLanguageSettings",
					"description": "Get the properties of a regionalAndLanguageSettings object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/regionalAndLanguageSettings"
						}
					}
				},
				{
					"name": "Users Settings Update Regional And Language Settings",
					"value": "Users Settings Update Regional And Language Settings",
					"action": "Update the navigation property regionalAndLanguageSettings in users",
					"description": "Update the navigation property regionalAndLanguageSettings in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/regionalAndLanguageSettings"
						}
					}
				},
				{
					"name": "Users Settings Delete Shift Preferences",
					"value": "Users Settings Delete Shift Preferences",
					"action": "Delete navigation property shiftPreferences for users",
					"description": "Delete navigation property shiftPreferences for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/shiftPreferences"
						}
					}
				},
				{
					"name": "Users Settings Get Shift Preferences",
					"value": "Users Settings Get Shift Preferences",
					"action": "Get shiftPreferences",
					"description": "Retrieve the properties and relationships of a shiftPreferences object by ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/shiftPreferences"
						}
					}
				},
				{
					"name": "Users Settings Update Shift Preferences",
					"value": "Users Settings Update Shift Preferences",
					"action": "Update shiftPreferences",
					"description": "Update the properties and relationships of a shiftPreferences object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/settings/shiftPreferences"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Delete Settings"
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
						"Users User Settings"
					],
					"operation": [
						"Users Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Get Settings"
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
						"Users User Settings"
					],
					"operation": [
						"Users Get Settings"
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
						"Users User Settings"
					],
					"operation": [
						"Users Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Update Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/settings/contactMergeSuggestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Delete Contact Merge Suggestions"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Delete Contact Merge Suggestions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/settings/contactMergeSuggestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Contact Merge Suggestions"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Contact Merge Suggestions"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Contact Merge Suggestions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings/contactMergeSuggestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Update Contact Merge Suggestions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings/contactMergeSuggestions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Update Contact Merge Suggestions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Delete Item Insights"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Delete Item Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Item Insights"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Item Insights"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Item Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Update Item Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings/itemInsights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Update Item Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/settings/regionalAndLanguageSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Delete Regional And Language Settings"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Delete Regional And Language Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/settings/regionalAndLanguageSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Regional And Language Settings"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Regional And Language Settings"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Regional And Language Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings/regionalAndLanguageSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Update Regional And Language Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings/regionalAndLanguageSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Update Regional And Language Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/settings/shiftPreferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Delete Shift Preferences"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Delete Shift Preferences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/settings/shiftPreferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Shift Preferences"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Shift Preferences"
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
						"Users User Settings"
					],
					"operation": [
						"Users Settings Get Shift Preferences"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings/shiftPreferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Update Shift Preferences"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/settings/shiftPreferences<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Settings"
					],
					"operation": [
						"Users Settings Update Shift Preferences"
					]
				}
			}
		},
];
