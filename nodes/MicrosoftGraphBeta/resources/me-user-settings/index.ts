import type { INodeProperties } from 'n8n-workflow';

export const meUserSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Settings",
					"value": "Me Delete Settings",
					"action": "Delete navigation property settings for me",
					"description": "Delete navigation property settings for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/settings"
						}
					}
				},
				{
					"name": "Me Get Settings",
					"value": "Me Get Settings",
					"action": "Get settings from me",
					"description": "Get settings from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/settings"
						}
					}
				},
				{
					"name": "Me Update Settings",
					"value": "Me Update Settings",
					"action": "Update the navigation property settings in me",
					"description": "Update the navigation property settings in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/settings"
						}
					}
				},
				{
					"name": "Me Settings Delete Contact Merge Suggestions",
					"value": "Me Settings Delete Contact Merge Suggestions",
					"action": "Delete navigation property contactMergeSuggestions for me",
					"description": "Delete navigation property contactMergeSuggestions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/settings/contactMergeSuggestions"
						}
					}
				},
				{
					"name": "Me Settings Get Contact Merge Suggestions",
					"value": "Me Settings Get Contact Merge Suggestions",
					"action": "Get contactMergeSuggestions",
					"description": "Read the properties and relationships of a contactMergeSuggestions object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/settings/contactMergeSuggestions"
						}
					}
				},
				{
					"name": "Me Settings Update Contact Merge Suggestions",
					"value": "Me Settings Update Contact Merge Suggestions",
					"action": "Update contactMergeSuggestions",
					"description": "Update the properties of a contactMergeSuggestions object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/settings/contactMergeSuggestions"
						}
					}
				},
				{
					"name": "Me Settings Delete Item Insights",
					"value": "Me Settings Delete Item Insights",
					"action": "Delete navigation property itemInsights for me",
					"description": "Delete navigation property itemInsights for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/settings/itemInsights"
						}
					}
				},
				{
					"name": "Me Settings Get Item Insights",
					"value": "Me Settings Get Item Insights",
					"action": "Get userInsightsSettings",
					"description": "Get the user-customizable privacy settings for itemInsights and meeting hours insights.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/settings/itemInsights"
						}
					}
				},
				{
					"name": "Me Settings Update Item Insights",
					"value": "Me Settings Update Item Insights",
					"action": "Update userInsightsSettings",
					"description": "Update the privacy settings for itemInsights and meeting hours insights of a user.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/settings/itemInsights"
						}
					}
				},
				{
					"name": "Me Settings Delete Regional And Language Settings",
					"value": "Me Settings Delete Regional And Language Settings",
					"action": "Delete navigation property regionalAndLanguageSettings for me",
					"description": "Delete navigation property regionalAndLanguageSettings for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/settings/regionalAndLanguageSettings"
						}
					}
				},
				{
					"name": "Me Settings Get Regional And Language Settings",
					"value": "Me Settings Get Regional And Language Settings",
					"action": "Get regionalAndLanguageSettings",
					"description": "Get the properties of a regionalAndLanguageSettings object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/settings/regionalAndLanguageSettings"
						}
					}
				},
				{
					"name": "Me Settings Update Regional And Language Settings",
					"value": "Me Settings Update Regional And Language Settings",
					"action": "Update the navigation property regionalAndLanguageSettings in me",
					"description": "Update the navigation property regionalAndLanguageSettings in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/settings/regionalAndLanguageSettings"
						}
					}
				},
				{
					"name": "Me Settings Delete Shift Preferences",
					"value": "Me Settings Delete Shift Preferences",
					"action": "Delete navigation property shiftPreferences for me",
					"description": "Delete navigation property shiftPreferences for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/settings/shiftPreferences"
						}
					}
				},
				{
					"name": "Me Settings Get Shift Preferences",
					"value": "Me Settings Get Shift Preferences",
					"action": "Get shiftPreferences",
					"description": "Retrieve the properties and relationships of a shiftPreferences object by ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/settings/shiftPreferences"
						}
					}
				},
				{
					"name": "Me Settings Update Shift Preferences",
					"value": "Me Settings Update Shift Preferences",
					"action": "Update shiftPreferences",
					"description": "Update the properties and relationships of a shiftPreferences object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/settings/shiftPreferences"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Delete Settings"
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
						"Me User Settings"
					],
					"operation": [
						"Me Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Get Settings"
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
						"Me User Settings"
					],
					"operation": [
						"Me Get Settings"
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
						"Me User Settings"
					],
					"operation": [
						"Me Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Update Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/settings/contactMergeSuggestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Delete Contact Merge Suggestions"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Delete Contact Merge Suggestions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/settings/contactMergeSuggestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Contact Merge Suggestions"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Contact Merge Suggestions"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Contact Merge Suggestions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings/contactMergeSuggestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Update Contact Merge Suggestions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings/contactMergeSuggestions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Update Contact Merge Suggestions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Delete Item Insights"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Delete Item Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /me/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Item Insights"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Item Insights"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Item Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Update Item Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings/itemInsights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Update Item Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/settings/regionalAndLanguageSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Delete Regional And Language Settings"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Delete Regional And Language Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/settings/regionalAndLanguageSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Regional And Language Settings"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Regional And Language Settings"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Regional And Language Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings/regionalAndLanguageSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Update Regional And Language Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings/regionalAndLanguageSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Update Regional And Language Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/settings/shiftPreferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Delete Shift Preferences"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Delete Shift Preferences"
					]
				}
			}
		},
		{
			"displayName": "GET /me/settings/shiftPreferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Shift Preferences"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Shift Preferences"
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
						"Me User Settings"
					],
					"operation": [
						"Me Settings Get Shift Preferences"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings/shiftPreferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Update Shift Preferences"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/settings/shiftPreferences<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Settings"
					],
					"operation": [
						"Me Settings Update Shift Preferences"
					]
				}
			}
		},
];
